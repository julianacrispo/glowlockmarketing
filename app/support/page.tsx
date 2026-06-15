import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Support | GlowLock",
  description: "Get help with GlowLock — account, subscriptions, app blocking, friends, and the AI Habit Coach.",
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-6">
        <div className="container mx-auto max-w-4xl">
          <Link href="/" className="w-fit text-xl font-serif font-semibold">
            GlowLock
          </Link>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-serif">Support</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Need help with GlowLock? We&apos;re here for you.
          </p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="mb-4 text-2xl font-serif">GlowLock</h2>
              <p className="leading-relaxed">
                GlowLock is a screen-time and habit-change app for iOS. It helps you reduce compulsive
                scrolling through customizable app-blocking shields, AI-powered habit coaching,
                behavioral insights, and social accountability.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">What We Can Help With</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Account and login issues</li>
                <li>Subscriptions and billing</li>
                <li>App blocking and shield setup</li>
                <li>Friends and accountability features</li>
                <li>AI Habit Coach</li>
                <li>Privacy and data requests</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                Email us and we&apos;ll get back to you as soon as we can:
              </p>
              <a
                href="mailto:julianacrispo@gmail.com"
                className="text-xl font-medium text-primary hover:underline"
              >
                julianacrispo@gmail.com
              </a>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Subscriptions</h2>
              <p className="leading-relaxed">
                GlowLock subscriptions are managed through Apple. To view, change, or cancel your
                subscription, visit{" "}
                <a
                  href="https://apps.apple.com/account/subscriptions"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Subscriptions
                </a>
                .
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground text-sm">
                Available plans include glowlock.annual (7-day free trial) and glowlock.monthly.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Use (Apple Standard EULA)
                  </Link>
                </li>
              </ul>
            </section>

            <hr className="my-8 border-border" />
            <p className="text-center text-muted-foreground">
              © 2026 Metrics Health International LLC. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
