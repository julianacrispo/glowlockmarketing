import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const KIT_API_KEY = process.env.KIT_API_KEY
    const KIT_FORM_ID = process.env.KIT_FORM_ID

    if (!KIT_API_KEY || !KIT_FORM_ID) {
      console.error("Missing KIT_API_KEY or KIT_FORM_ID environment variables")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          api_key: KIT_API_KEY,
          email,
        }),
      }
    )

    if (!res.ok) {
      const data = await res.json()
      console.error("Kit API error:", data)
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
