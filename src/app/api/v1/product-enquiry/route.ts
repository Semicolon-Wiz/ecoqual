'use server'
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const Product_Enquiry = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string(),
    product: z.string()
});

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const Product_Enquiry_Data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            phone: formData.get('phone'),
            product: formData.get('product'),
        };

        const parsed = Product_Enquiry.safeParse(Product_Enquiry_Data);

        if (!parsed.success) {
            return NextResponse.json(
                { success: false, message: 'Please provide valid data' },
                { status: 411 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'wizards@ecoqual.in',
            subject: 'New Product Enquiry Request',
            html: `
        <h2>New Product Enquiry</h2>
        <p><strong>Name:</strong> ${Product_Enquiry_Data.name}</p>
        <p><strong>Email:</strong> ${Product_Enquiry_Data.email}</p>
        <p><strong>Phone:</strong> ${Product_Enquiry_Data.phone}</p>
        <p><strong>Product Name:</strong> ${Product_Enquiry_Data.product}</p>
        <p><strong>Message:</strong> ${Product_Enquiry_Data.message}</p>
      `,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: 'Something went wrong' },
            { status: 500 }
        );
    }
}
