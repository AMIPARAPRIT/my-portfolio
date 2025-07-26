import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // In a real application, you would integrate with an email service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend

    // For now, we'll simulate the email sending
    console.log("Email would be sent to pritprit406@gmail.com:")
    console.log("From:", name, "(", email, ")")
    console.log("Message:", message)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Message sent successfully to pritprit406@gmail.com",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
