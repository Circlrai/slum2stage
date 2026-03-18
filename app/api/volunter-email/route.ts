import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { fullName, email, phoneNumber, location, age, gender } =
    await request.json();

  if (!fullName || !email || !phoneNumber || !location || !age || !gender) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
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
      { status: 500 },
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

  const textBody = `Hello,

You have a new volunteer interest submission.

Full name: ${fullName}
Email: ${email}
Phone: ${phoneNumber}
Location: ${location}
Age: ${age}
Gender: ${gender}
`;

  const htmlBody = `
    <div style="background: #F3FAFC; padding: 32px 12px;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #EAECF0; border-radius: 16px; overflow: hidden; font-family: Arial, sans-serif; color: #101828;">
        <div style="background: #44B5D0; padding: 20px 24px; color: #ffffff;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="https://www.slum2stage.org/_next/static/media/Logo.bf751a73.svg" alt="Slum to Stage" style="height: 32px; width: auto; display: block;" />
            <div>
              <div style="font-size: 18px; font-weight: 700; letter-spacing: 0.4px;">Slum to Stage</div>
              <div style="font-size: 14px; opacity: 0.9; margin-top: 4px;">Volunteer Interest Submission</div>
            </div>
          </div>
        </div>
        <div style="padding: 24px;">
          <p style="margin: 0 0 16px;">You have a new volunteer interest submission. Details below.</p>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #667085; width: 160px;">Full name</td>
              <td style="padding: 10px 0; font-weight: 600; color: #101828;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #667085;">Email</td>
              <td style="padding: 10px 0; font-weight: 600;">
                <a href="mailto:${email}" style="color: #056980; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #667085;">Phone</td>
              <td style="padding: 10px 0; font-weight: 600;">${phoneNumber}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #667085;">Location</td>
              <td style="padding: 10px 0; font-weight: 600;">${location}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #667085;">Age</td>
              <td style="padding: 10px 0; font-weight: 600;">${age}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #667085;">Gender</td>
              <td style="padding: 10px 0; font-weight: 600;">${gender}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 12px 16px; background: #F3FAFC; border: 1px solid #EAECF0; border-radius: 12px;">
            <strong style="color: #101828;">Reply to volunteer:</strong>
            <a href="mailto:${email}" style="color: #056980; text-decoration: none;">${email}</a>
          </div>
        </div>
        <div style="padding: 14px 24px; background: #F9FAFB; color: #667085; font-size: 12px;">
          This email was generated from the Slum to Stage volunteer form.
        </div>
      </div>
    </div>
  `;

  const mailOptions: Mail.Options = {
    from: smtpUser,
    to: receiverEmail,
    replyTo: email,
    subject: `Volunteer Enquiry from ${fullName}`,
    text: textBody,
    html: htmlBody,
  };

  const confirmationText = `Hello ${fullName},

Thank you for your interest in joining Slum to Stage. We are building a community of individuals passionate about transforming the lives of children and at risk youth through arts and education. Your interest is recorded and our team will reach out to you.
`;

  const confirmationHtml = `
    <div style="background: #F3FAFC; padding: 32px 12px;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #EAECF0; border-radius: 16px; overflow: hidden; font-family: Arial, sans-serif; color: #101828;">
        <div style="background: #44B5D0; padding: 20px 24px; color: #ffffff;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="https://www.slum2stage.org/_next/static/media/Logo.bf751a73.svg" alt="Slum to Stage" style="height: 32px; width: auto; display: block;" />
            <div>
              <div style="font-size: 18px; font-weight: 700; letter-spacing: 0.4px;">Slum to Stage</div>
              <div style="font-size: 14px; opacity: 0.9; margin-top: 4px;">Volunteer Confirmation</div>
            </div>
          </div>
        </div>
        <div style="padding: 24px;">
          <p style="margin: 0 0 16px;">Hello ${fullName},</p>
          <p style="margin: 0 0 16px;">
            Thank you for your interest in joining Slum to Stage. We are building a community of individuals passionate about transforming the lives of children and at risk youth through arts and education. Your interest is recorded and our team will reach out to you.
          </p>
          <div style="margin-top: 20px; padding: 12px 16px; background: #F3FAFC; border: 1px solid #EAECF0; border-radius: 12px; color: #667085;">
            If you have questions, reply to this email and we will get back to you.
          </div>
        </div>
        <div style="padding: 14px 24px; background: #F9FAFB; color: #667085; font-size: 12px;">
          Slum to Stage | Volunteer Community
        </div>
      </div>
    </div>
  `;

  const sendMailPromise = (options: Mail.Options) =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(options, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise(mailOptions);
    await sendMailPromise({
      from: smtpUser,
      to: email,
      replyTo: receiverEmail,
      subject: "Thanks for volunteering with Slum to Stage",
      text: confirmationText,
      html: confirmationHtml,
    });
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    // Explicit error logging
    console.error("Failed to send email:", err);

    return NextResponse.json(
      { error: typeof err === "string" ? err : "Internal Server Error" },
      { status: 500 },
    );
  }
}
