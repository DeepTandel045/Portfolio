import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // In a real application, you could send email using Nodemailer, Resend, SendGrid, etc.
    // For local portfolio, provide success response or mailto fallback trigger
    return NextResponse.json({
      success: true,
      fallbackMailto: true,
      message: 'Opening mail client to send your message directly.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error processing contact message.' },
      { status: 500 }
    );
  }
}
