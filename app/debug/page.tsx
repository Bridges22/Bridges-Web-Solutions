'use client';

import { useState } from 'react';

export default function DebugPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/test-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          business: 'Test Business',
          projectType: 'Website',
          message: 'This is a test message'
        }),
      });

      const data = await response.json();
      setResult({
        status: response.status,
        statusText: response.statusText,
        data: data
      });
    } catch (error) {
      setResult({
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  const testMainAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          business: 'Test Business',
          projectType: 'Website',
          message: 'This is a test message'
        }),
      });

      const data = await response.json();
      setResult({
        status: response.status,
        statusText: response.statusText,
        data: data
      });
    } catch (error) {
      setResult({
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  const testGETAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'GET',
      });

      const data = await response.json();
      setResult({
        status: response.status,
        statusText: response.statusText,
        data: data
      });
    } catch (error) {
      setResult({
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Email Debug Page</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">API Testing</h2>
            
            <div className="space-y-4">
              <button
                onClick={testGETAPI}
                disabled={loading}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {loading ? 'Testing...' : 'Test GET Contact API'}
              </button>
              
              <button
                onClick={testAPI}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 ml-4"
              >
                {loading ? 'Testing...' : 'Test Simple API'}
              </button>
              
              <button
                onClick={testMainAPI}
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 ml-4"
              >
                {loading ? 'Testing...' : 'Test Main Contact API'}
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-4">API Response</h2>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
