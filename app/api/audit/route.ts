import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const business = String(form.get("business") || "").trim();
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const google = String(form.get("google") || "").trim();
    const website = String(form.get("website") || "").trim();

    // Honeypot: silently accept obvious bot submissions without sending mail.
    if (website) return NextResponse.redirect(new URL("/?submitted=1#audit", request.url), 303);
    if (!business || !name || !email) {
      return NextResponse.redirect(new URL("/?error=missing#audit", request.url), 303);
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.");
      return NextResponse.redirect(new URL("/?error=server#audit", request.url), 303);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Presencio Website <${user}>`,
      to: "presencio.ops@gmail.com",
      replyTo: email,
      subject: `New free review audit request — ${business}`,
      text: [
        "New Presencio review audit request",
        "",
        `Business: ${business}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Google Business Profile: ${google || "Not provided"}`,
      ].join("\n"),
    });

    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  } catch (error) {
    console.error("Audit form error:", error);
    return NextResponse.redirect(new URL("/?error=server#audit", request.url), 303);
  }
}
