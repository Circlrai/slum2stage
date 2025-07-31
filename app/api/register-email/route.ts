import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const {
    fullName,
    dateOfBirth,
    age,
    parentName,
    email,
    address,
    category,
    danceStyle,
  } = await request.json();

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
    subject: `Dance Registration for ${fullName}`,
    text: `
    Hello, I recently registered for ${danceStyle} for my ${category}, I am ${age}, and my parent's name is ${parentName}.
    Date of birth: ${dateOfBirth}.
    Our address is: ${address}.
    Contact email: ${email}
  `,
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
