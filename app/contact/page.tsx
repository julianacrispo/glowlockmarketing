import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact | GlowLock",
  description: "Contact GlowLock.",
}

export default function ContactPage() {
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
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-serif">Contact Us</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            For questions or concerns, please contact
          </p>
          <a
            href="mailto:julianacrispo@gmail.com"
            className="text-xl font-medium text-primary hover:underline"
          >
            julianacrispo@gmail.com
          </a>
        </div>
      </main>
    </div>
  )
}
