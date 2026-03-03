"use client"

import { useState } from "react"

export function FinalCta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Something went wrong")
      }
      setSubmitted(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        {/* Cassette decoration */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-30" aria-hidden="true">
          <div className="h-px w-12 bg-border" />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border-2 border-border" />
            <div className="h-4 w-12 bg-border rounded-sm" />
            <div className="h-8 w-8 rounded-full border-2 border-border" />
          </div>
          <div className="h-px w-12 bg-border" />
        </div>

        <h2 className="font-serif text-4xl md:text-6xl italic text-foreground text-balance leading-[1.1]">
          Take back your days, one reflection at a time.
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          Join hundreds who traded mindless scrolling for presence and gratitude.
          Your first tape is waiting.
        </p>

        {/* Inline email capture */}
        {submitted ? (
          <div className="inline-flex items-center gap-2 rounded-lg border border-accent bg-card px-6 py-4">
            <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-foreground">
              {"Check your inbox for your iOS link and trial details."}
            </span>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="email-capture" className="sr-only">Email address</label>
              <input
                id="email-capture"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                disabled={loading}
                className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-primary px-6 py-3 text-xs uppercase tracking-[0.15em] font-bold text-primary-foreground transition-colors hover:bg-foreground disabled:opacity-50"
              >
                {loading ? "Sending..." : "Get 3 Days Free"}
              </button>
            </form>
            {error && (
              <p className="mt-2 text-xs text-destructive">{error}</p>
            )}
          </>
        )}

        {/* Social proof */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-3.5 w-3.5 text-accent fill-accent" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground tracking-wider">
            96+ Five-Star Reviews
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground tracking-wider">
          Former doomscrollers love us
        </p>
      </div>
    </section>
  )
}
