import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate that all required fields are present
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "البيانات المطلوبة غير مكتملة" },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      // THIS IS THE CRITICAL LINE
      // Ensure the format is exactly: 'Your Name <email@example.com>'
      from: "Bravocode <onboarding@resend.dev>",

      // Replace with your personal email to receive the messages
      to: ["me8999109@gmail.com"],

      subject: `رسالة جديدة من ${name} عبر موقع Bravocode`,

      // The body of the email
      html: `
        <h1>رسالة جديدة من نموذج التواصل</h1>
        <p>لقد تلقيت رسالة جديدة من موقعك.</p>
        <hr>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني للرد:</strong> ${email}</p>
        <p><strong>الرسالة:</strong></p>
        <blockquote>${message}</blockquote>
      `,
    });

    // Handle errors from Resend
    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: "فشل إرسال الإيميل" }, { status: 500 });
    }

    // Handle success
    return NextResponse.json(
      { message: "تم إرسال رسالتك بنجاح!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "حدث خطأ في الخادم" }, { status: 500 });
  }
}
