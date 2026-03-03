"use client"

import { useState } from "react"

export function Hero() {
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
    <section className="relative flex flex-col items-center px-6 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle tape lines decoration */}
      <div className="absolute top-12 left-0 right-0 flex justify-center opacity-20 pointer-events-none" aria-hidden="true">
        <div className="w-full max-w-2xl h-px bg-border" />
      </div>

      {/* Main headline */}
      <h1 className="text-center max-w-4xl">
        <span className="block font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground text-balance italic">
          Glow before
        </span>
        <span className="block font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground text-balance italic">
          you scroll.
        </span>
      </h1>

      {/* Sub headline */}
      <p className="mt-6 max-w-lg text-center text-base md:text-lg leading-relaxed text-muted-foreground">
        GlowLock blocks your most addictive apps until you complete a gratitude
        reflection. Take back your days, one reflection at a time.
      </p>

      {/* Above-the-fold email capture */}
      <div className="mt-10 w-full max-w-md text-center">
        {submitted ? (
          <div className="inline-flex items-center gap-2 rounded-lg border border-accent bg-card px-4 py-3">
            <svg
              className="h-4 w-4 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-foreground">
              Check your inbox for your iOS link and trial details.
            </span>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="hero-email-capture" className="sr-only">
                Email address
              </label>
              <input
                id="hero-email-capture"
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
                className="rounded-lg bg-primary px-5 py-3 text-xs uppercase tracking-[0.12em] font-bold text-primary-foreground transition-colors hover:bg-foreground disabled:opacity-50"
              >
                {loading ? "Sending..." : "Get 3 Days Free"}
              </button>
            </form>
            {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
          </>
        )}
      </div>

      {/* Social proof mini */}
      <div className="mt-6 flex items-center gap-2">
        <div className="flex -space-x-1" aria-label="5 star rating">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 text-accent fill-accent"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-muted-foreground tracking-wider uppercase">
          96+ Five-Star Reviews
        </span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground tracking-wider">
        Former doomscrollers love us
      </p>


    </section>
  )
}
