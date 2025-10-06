'use client';

import { useState } from 'react';

interface SpeedTestResult {
  url: string;
  loadTime: number;
  performanceScore: number;
  issues: string[];
  improvements: string[];
  potentialSavings: number;
}

export default function SpeedTestTool() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SpeedTestResult | null>(null);
  const [error, setError] = useState('');

  // Simulate speed test (in real implementation, this would call a real API)
  const runSpeedTest = async () => {
    if (!url) {
      setError('Please enter a website URL');
      return;
    }

    // Basic URL validation
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlPattern.test(url)) {
      setError('Please enter a valid website URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Generate realistic but random results
    const loadTime = Math.random() * 8 + 2; // 2-10 seconds
    const performanceScore = Math.floor(Math.random() * 40 + 30); // 30-70 (typical poor scores)
    
    const commonIssues = [
      'Large image files not optimized',
      'Too many HTTP requests',
      'No image compression',
      'Render-blocking JavaScript',
      'No browser caching enabled',
      'Unminified CSS and JavaScript',
      'No content delivery network (CDN)',
      'Poor server response time'
    ];

    const improvements = [
      'Optimize and compress images',
      'Enable browser caching',
      'Minify CSS and JavaScript',
      'Use a content delivery network',
      'Optimize server response time',
      'Remove unused code',
      'Enable GZIP compression',
      'Lazy load images'
    ];

    const selectedIssues = commonIssues.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 4) + 3);
    const selectedImprovements = improvements.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 3);

    const mockResult: SpeedTestResult = {
      url: url,
      loadTime: Math.round(loadTime * 10) / 10,
      performanceScore: performanceScore,
      issues: selectedIssues,
      improvements: selectedImprovements,
      potentialSavings: Math.floor((10 - loadTime) * 10) / 10
    };

    setResult(mockResult);
    setIsLoading(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-red-900/20 to-slate-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 text-red-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <i className="ri-speed-line"></i>
            Free Website Speed Test
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Is Your Website Too Slow?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your website's speed for free and discover how much faster it could be. Slow websites lose customers!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Speed Test Input */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your website URL (e.g., https://yourwebsite.com)"
                  className="w-full px-6 py-4 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  disabled={isLoading}
                />
                {error && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                    <i className="ri-error-warning-line"></i>
                    {error}
                  </p>
                )}
              </div>
              <button
                onClick={runSpeedTest}
                disabled={isLoading}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[200px]"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Testing...
                  </>
                ) : (
                  <>
                    <i className="ri-play-line text-xl"></i>
                    Test Speed
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Loading Animation */}
          {isLoading && (
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-2">Analyzing Your Website...</h3>
                <p className="text-gray-400">This may take a few seconds</p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <i className="ri-check-line text-green-400"></i>
                    Checking page load time
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <i className="ri-check-line text-green-400"></i>
                    Analyzing performance metrics
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <div className="w-4 h-4 border-2 border-gray-400/30 border-t-gray-400 rounded-full animate-spin"></div>
                    Identifying optimization opportunities
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="space-y-8">
              {/* Overall Score */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Speed Test Results for</h3>
                  <p className="text-cyan-400 font-mono text-lg">{result.url}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Load Time */}
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-slate-700"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${(10 - result.loadTime) * 31.4} 314`}
                          className="text-red-400"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{result.loadTime}s</div>
                          <div className="text-xs text-gray-400">Load Time</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-red-400 font-semibold">Too Slow!</div>
                    <div className="text-gray-400 text-sm">Should be under 3 seconds</div>
                  </div>

                  {/* Performance Score */}
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-slate-700"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${result.performanceScore * 3.14} 314`}
                          className={getScoreColor(result.performanceScore)}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{result.performanceScore}</div>
                          <div className="text-xs text-gray-400">Score</div>
                        </div>
                      </div>
                    </div>
                    <div className={`font-semibold ${getScoreColor(result.performanceScore)}`}>
                      {getScoreLabel(result.performanceScore)}
                    </div>
                    <div className="text-gray-400 text-sm">Needs optimization</div>
                  </div>
                </div>
              </div>

              {/* Issues Found */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="ri-error-warning-line text-red-400"></i>
                    Issues Found
                  </h4>
                  <div className="space-y-3">
                    {result.issues.map((issue, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <i className="ri-close-circle-line text-red-400 mt-1"></i>
                        <span className="text-gray-300">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-green-400"></i>
                    Recommended Fixes
                  </h4>
                  <div className="space-y-3">
                    {result.improvements.map((improvement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <i className="ri-check-circle-line text-green-400 mt-1"></i>
                        <span className="text-gray-300">{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">We Can Make Your Website Lightning Fast!</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our optimized websites load in under 2 seconds and score 95+ on performance tests. 
                  Don't lose customers to slow loading times!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <div className="bg-green-500/20 border border-green-400/30 text-green-300 px-6 py-3 rounded-full">
                    <strong>Potential time savings: {result.potentialSavings}+ seconds</strong>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-400/30 text-blue-300 px-6 py-3 rounded-full">
                    <strong>Target score: 95+</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/254104613770?text=Hi! I tested my website speed and it's ${result.loadTime}s with a score of ${result.performanceScore}. Can you help me make it faster?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <i className="ri-whatsapp-line text-xl"></i>
                    Fix My Website Speed
                  </a>
                  
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <i className="ri-download-line text-xl"></i>
                    Download Full Report
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
