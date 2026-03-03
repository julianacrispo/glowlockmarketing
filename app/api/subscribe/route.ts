import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID

    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      console.error("Missing BREVO_API_KEY or BREVO_LIST_ID environment variables")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const listId = Number(BREVO_LIST_ID)
    if (Number.isNaN(listId)) {
      console.error("BREVO_LIST_ID must be a number")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => null)
      console.error("Brevo API error:", data)
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
