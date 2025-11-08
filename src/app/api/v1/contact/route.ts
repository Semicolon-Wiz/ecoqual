import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone is required'),
  message: z.string().min(1, 'Message is required'),
});

type ContactData = z.infer<typeof ContactSchema>;

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    let body: Partial<ContactData> = {};

    const formData = await req.formData();
    body = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    }

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors },
        { status: 422 }
      );
    }

    const { name, email, phone, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: 'EcoQual Contact <wizards@ecoqual.in>',
      to: ['contact@ecoqual.in', 'akshat.gd@gmail.com'],
      subject: 'New Contact Request',
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error('❌ Email sending failed:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email', error: error.message },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('🚨 Unexpected Server Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
