import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('=== TEST API CALLED ===');
    console.log('Received data:', body);
    
    // Check environment variables
    console.log('Environment check:', {
      SMTP_USER: process.env.SMTP_USER ? 'SET' : 'MISSING',
      SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'MISSING',
      NODE_ENV: process.env.NODE_ENV
    });
    
    // Always return success for testing
    return NextResponse.json(
      { 
        message: 'Test API working! Form data received.',
        data: body,
        env: {
          hasSmtpUser: !!process.env.SMTP_USER,
          hasSmtpPass: !!process.env.SMTP_PASS,
          nodeEnv: process.env.NODE_ENV
        }
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json(
      { error: 'Test API failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Test API is working',
      timestamp: new Date().toISOString(),
      env: {
        hasSmtpUser: !!process.env.SMTP_USER,
        hasSmtpPass: !!process.env.SMTP_PASS,
        nodeEnv: process.env.NODE_ENV
      }
    },
    { status: 200 }
  );
}
