import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, guardian, kids } = await request.json();

  if (!email || !guardian || !kids) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");
  const smtpSecure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;
  const smtpUser = process.env.SMTP_USER ?? process.env.MY_EMAIL;
  const smtpPass = process.env.SMTP_PASS ?? process.env.MY_PASSWORD;
  const receiverEmail = process.env.RECEIVER_EMAIL;

  if (!smtpUser || !smtpPass || !receiverEmail) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const transport = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  const mailOptions: Mail.Options = {
    from: smtpUser,
    to: receiverEmail,
    replyTo: email,
    subject: `Volunteer Enquiry from ${guardian}`,
    text: `Hello, I am ${guardian}, making an enquiry to volunteer with Slum2Stage for ${kids} kid(s).`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    // Explicit error logging
    console.error("Failed to send email:", err);

    return NextResponse.json(
      { error: typeof err === "string" ? err : "Internal Server Error" },
      { status: 500 }
    );
  }
}
