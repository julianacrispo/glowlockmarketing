import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Use | GlowLock",
  description: "GlowLock is licensed under Apple's Standard EULA.",
}

export default function TermsPage() {
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
          <h1 className="mb-6 text-4xl font-serif">Terms of Use</h1>

          <div className="space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              GlowLock is licensed to you under Apple&apos;s Standard Licensed Application End User
              License Agreement (EULA).
            </p>

            <p>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                className="text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Apple&apos;s Standard EULA &rarr;
              </a>
            </p>

            <p className="leading-relaxed text-muted-foreground">
              For privacy practices, see our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . For help,{" "}
              <Link href="/support" className="text-primary hover:underline">
                contact support
              </Link>
              .
            </p>

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
