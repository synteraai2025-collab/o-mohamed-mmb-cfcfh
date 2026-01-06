import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject must be less than 200 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Rate limiting - simple in-memory store (consider Redis for production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitStore.get(identifier);

  if (!userLimit) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (now > userLimit.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

// Clean up expired entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, RATE_LIMIT_WINDOW);

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded',
          message: 'Too many requests. Please try again later.'
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    // Validate with Zod schema
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          message: 'Please check your input and try again.',
          details: validationResult.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    const validatedData: ContactFormData = validationResult.data;

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM system
    // For now, we'll simulate these operations

    // Simulate database save
    console.log('Contact form submission received:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip: clientIP
    });

    // Simulate email sending (in production, use a service like SendGrid, Mailgun, etc.)
    // This is where you would integrate with your email service
    const emailData = {
      to: process.env.CONTACT_EMAIL || 'contact@example.com',
      from: process.env.FROM_EMAIL || 'noreply@example.com',
      subject: `Contact Form: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from IP: ${clientIP}</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Subject: ${validatedData.subject}
        Message: ${validatedData.message}
        
        Submitted from IP: ${clientIP}
      `
    };

    // Log email data (in production, actually send the email)
    console.log('Email to be sent:', emailData);

    // Simulate async operations
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!',
        data: {
          id: Date.now().toString(), // Simulate database ID
          submittedAt: new Date().toISOString()
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Handle different types of errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { 
          error: 'Invalid JSON',
          message: 'The request body is not valid JSON.'
        },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { 
          error: 'Internal server error',
          message: 'Something went wrong. Please try again later.',
          debug: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Unknown error',
        message: 'An unexpected error occurred.'
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET endpoint to retrieve contact submissions (with authentication)
export async function GET(request: NextRequest) {
  // This would typically require authentication
  // For now, return a message indicating this endpoint is not implemented
  return NextResponse.json(
    { 
      error: 'Not implemented',
      message: 'This endpoint is not available.'
    },
    { status: 501 }
  );
}
