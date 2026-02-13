import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, email, message } = body;

        // Validate required fields
        if (!name || !phone || !message) {
            return NextResponse.json(
                { error: "Name, phone, and message are required." },
                { status: 400 }
            );
        }

        // Validate email format if provided
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format." },
                { status: 400 }
            );
        }

        const contactEmail = process.env.CONTACT_EMAIL || "thurainstoreofficial@gmail.com";

        // Send the email
        const { data, error } = await resend.emails.send({
            from: "ThuRain Store Contact <onboarding@resend.dev>",
            to: [contactEmail],
            subject: `New Contact Form Message from ${name}`,
            replyTo: email || undefined,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 2px;">
                            THURAIN STORE
                        </h1>
                        <p style="color: #a0aec0; margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 3px;">
                            New Contact Form Submission
                        </p>
                    </div>

                    <!-- Body -->
                    <div style="padding: 30px; background-color: #f8fafc; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
                        
                        <!-- Name -->
                        <div style="margin-bottom: 20px; padding: 16px; background: #ffffff; border-radius: 8px; border-left: 4px solid #0f3460;">
                            <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #718096; font-weight: 600;">
                                Name
                            </p>
                            <p style="margin: 0; font-size: 16px; color: #1a202c; font-weight: 500;">
                                ${name}
                            </p>
                        </div>

                        <!-- Phone -->
                        <div style="margin-bottom: 20px; padding: 16px; background: #ffffff; border-radius: 8px; border-left: 4px solid #0f3460;">
                            <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #718096; font-weight: 600;">
                                Phone
                            </p>
                            <p style="margin: 0; font-size: 16px; color: #1a202c; font-weight: 500;">
                                <a href="tel:${phone}" style="color: #0f3460; text-decoration: none;">${phone}</a>
                            </p>
                        </div>

                        <!-- Email (if provided) -->
                        ${email ? `
                        <div style="margin-bottom: 20px; padding: 16px; background: #ffffff; border-radius: 8px; border-left: 4px solid #0f3460;">
                            <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #718096; font-weight: 600;">
                                Email
                            </p>
                            <p style="margin: 0; font-size: 16px; color: #1a202c; font-weight: 500;">
                                <a href="mailto:${email}" style="color: #0f3460; text-decoration: none;">${email}</a>
                            </p>
                        </div>
                        ` : ''}

                        <!-- Message -->
                        <div style="margin-bottom: 20px; padding: 16px; background: #ffffff; border-radius: 8px; border-left: 4px solid #0f3460;">
                            <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #718096; font-weight: 600;">
                                Message
                            </p>
                            <p style="margin: 0; font-size: 16px; color: #1a202c; line-height: 1.6; white-space: pre-wrap;">
                                ${message}
                            </p>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="padding: 20px 30px; background-color: #1a1a2e; text-align: center; border-radius: 0 0 8px 8px;">
                        <p style="margin: 0; font-size: 12px; color: #718096;">
                            This message was sent from the ThuRain Store website contact form.
                        </p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
