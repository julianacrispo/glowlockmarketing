import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | GlowLock",
  description: "Privacy Policy for GlowLock.",
}

export default function PrivacyPage() {
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
          <h1 className="mb-4 text-4xl font-serif">Privacy Policy for Glowlock</h1>
          <p className="mb-8 text-muted-foreground">Last Updated: January 2026</p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="mb-4 text-2xl font-serif">Overview</h2>
              <p className="leading-relaxed">
                Glowlock ("we", "our", or "the app") is a gratitude journaling app that helps you
                build a daily mindfulness habit through voice journaling. We take your privacy
                seriously and are committed to protecting your personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Information We Collect</h2>

              <h3 className="mb-3 mt-6 text-xl font-serif">1. Account Information</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Email address:</strong> Used to create and manage your account via
                  Firebase Authentication
                </li>
                <li>
                  <strong>Authentication tokens:</strong> To keep you signed in securely
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-serif">2. Journal Entries</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Voice recordings:</strong> Stored in Firebase Cloud Storage so you can
                  replay them
                </li>
                <li>
                  <strong>Transcribed text:</strong> Stored in Firebase Firestore
                </li>
                <li>
                  <strong>Timestamps:</strong> When entries were created
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-serif">3. Subscription Information</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Purchase history:</strong> Managed through RevenueCat to provide premium
                  features
                </li>
                <li>
                  We do not store your payment details directly; these are handled by Apple
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-serif">4. App Blocking Preferences</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Selected apps to block:</strong> This information stays entirely on your
                  device using Apple's Screen Time API
                </li>
                <li>We cannot see which apps you choose to block</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">How We Use Your Information</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>To provide and improve the journaling experience</li>
                <li>To transcribe your voice recordings into text using OpenAI's Whisper API</li>
                <li>To sync your journal entries across your devices</li>
                <li>To manage your subscription status</li>
                <li>To provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Third-Party Services</h2>
              <p className="mb-4 leading-relaxed">We use the following third-party services:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Firebase (Google):</strong> Authentication and data storage -{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firebase Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>RevenueCat:</strong> Subscription management -{" "}
                  <a
                    href="https://www.revenuecat.com/privacy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RevenueCat Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Apple Screen Time API:</strong> App blocking (on-device only) -{" "}
                  <a
                    href="https://www.apple.com/privacy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Data Storage &amp; Security</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Your journal entries (text) are stored securely in Firebase Firestore</li>
                <li>
                  Voice recordings are stored in Firebase Cloud Storage so you can replay them
                </li>
                <li>All data is transmitted securely via HTTPS and encrypted at rest</li>
                <li>
                  App blocking preferences remain on your device and are never transmitted to us
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Your Rights</h2>
              <p className="mb-4 leading-relaxed">You can:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Access</strong> your data by viewing your journal entries in the app
                </li>
                <li>
                  <strong>Delete</strong> individual entries within the app
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Data Retention</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Journal entries and voice recordings are retained until you delete them or your
                  account
                </li>
                <li>Account data is deleted when you delete your account</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Children&apos;s Privacy</h2>
              <p className="leading-relaxed">
                Glowlock is not intended for children under 13. We do not knowingly collect
                information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any
                changes by posting the new policy in the app or on our website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this privacy policy or your data, please contact us at:
              </p>
              <p className="mt-2 leading-relaxed">
                <strong>Email:</strong>{" "}
                <a href="mailto:julianacrispo@gmail.com" className="text-primary hover:underline">
                  julianacrispo@gmail.com
                </a>
              </p>
            </section>

            <hr className="my-8 border-border" />
            <p className="text-center text-muted-foreground">
              © 2025 Metrics Health International LLC. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
