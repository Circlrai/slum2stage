import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, guardian, kids } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
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
