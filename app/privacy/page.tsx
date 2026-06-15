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
          <h1 className="mb-4 text-4xl font-serif">Privacy Policy</h1>
          <p className="mb-8 text-muted-foreground">Last Updated: June 15, 2026</p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="mb-4 text-2xl font-serif">Overview</h2>
              <p className="leading-relaxed">
                GlowLock (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the app&rdquo;) is a
                screen-time and habit-change app that helps you reduce compulsive phone use. It does
                this through customizable app-blocking shields, AI-powered habit coaching, behavioral
                insights, and social accountability features. We take your privacy seriously and are
                committed to protecting your personal information.
              </p>
              <p className="mt-4 leading-relaxed">
                GlowLock is operated by Metrics Health International LLC. This policy describes what
                data we collect, how we use it, and your choices.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Information We Collect</h2>

              <h3 className="mb-3 mt-6 text-xl font-serif">1. Account Information</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Email address:</strong> Used to create and manage your account via Firebase
                  Authentication.
                </li>
                <li>
                  <strong>Display name:</strong> A name or alias you choose, visible to friends you
                  add on the platform.
                </li>
                <li>
                  <strong>Authentication tokens:</strong> To keep you signed in securely.
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-serif">2. AI Habit Coach Conversations</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Messages you send to the Habit Coach:</strong> When you interact with the
                  AI coach, your messages are sent to our server (Firebase Cloud Functions) and
                  forwarded to Anthropic&apos;s Claude API for processing. Responses are returned to
                  you in-app.
                </li>
                <li>
                  <strong>Conversation history:</strong> Stored in Firebase Firestore so the coach
                  can maintain context across sessions.
                </li>
                <li>
                  Anthropic does not use your data to train its models when accessed via their API.
                  See{" "}
                  <a
                    href="https://www.anthropic.com/privacy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Anthropic&apos;s Privacy Policy
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-serif">3. Shield Content</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Custom shield prompts:</strong> The text you write for your personalized
                  blocking screen (e.g., reminders and prompts shown before opening a blocked app),
                  stored in Firebase Firestore.
                </li>
                <li>
                  <strong>Timestamps:</strong> When shield content was created or updated.
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-serif">4. Social &amp; Accountability Data</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Friends list:</strong> The users you connect with via friend codes.
                </li>
                <li>
                  <strong>Friend codes:</strong> Unique codes used to establish connections.
                </li>
                <li>
                  <strong>Shared data with friends:</strong> Your display name and daily unlock time
                  on blocked apps (in minutes) are visible to your friends.
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-serif">5. Usage &amp; Behavioral Insights</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Shield deflection events:</strong> How often your shield successfully
                  prevented you from opening a blocked app.
                </li>
                <li>
                  <strong>Unlock time:</strong> Total time spent in blocked apps after choosing to
                  proceed through the shield.
                </li>
                <li>
                  <strong>Emotional tags:</strong> If you tag why you opened an app (e.g., boredom,
                  anxiety), this is stored to generate your personal insights.
                </li>
                <li>
                  <strong>Analytics:</strong> We use Firebase Analytics to understand app usage
                  patterns, feature engagement, and crashes. This may include device type, OS
                  version, and session duration.
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-serif">6. Subscription Information</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Purchase history:</strong> Managed through RevenueCat to provide premium
                  features and manage your subscription status.
                </li>
                <li>
                  We do not store your payment details directly; these are handled by Apple.
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-serif">7. App Blocking Preferences</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Selected apps to block:</strong> This information stays entirely on your
                  device using Apple&apos;s Screen Time / Family Controls API.
                </li>
                <li>We cannot see which specific apps you choose to block.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">What We Do Not Collect</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>We do not collect audio recordings or voice data.</li>
                <li>We do not collect journal entries or transcribed text from voice input.</li>
                <li>We do not store your payment card or billing details.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">How We Use Your Information</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>To provide the AI Habit Coach experience (processing your messages via Anthropic&apos;s Claude API)</li>
                <li>To generate personalized behavioral insights (e.g., which emotions drive your scrolling)</li>
                <li>To enable social accountability features (sharing daily unlock time with friends)</li>
                <li>To sync your shield configuration across your devices</li>
                <li>To manage your subscription status</li>
                <li>To improve app performance and fix bugs via analytics</li>
                <li>To provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Third-Party Services</h2>
              <p className="mb-4 leading-relaxed">We use the following third-party services:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Firebase (Google):</strong> Authentication, Firestore database, Cloud
                  Functions, and Analytics &mdash;{" "}
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
                  <strong>Anthropic (Claude API):</strong> Powers the AI Habit Coach. Your coach
                  messages are sent to Anthropic for processing. Anthropic does not use API data to
                  train models &mdash;{" "}
                  <a
                    href="https://www.anthropic.com/privacy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Anthropic Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>RevenueCat:</strong> Subscription and purchase management &mdash;{" "}
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
                  <strong>Apple Screen Time / Family Controls API:</strong> App blocking (on-device
                  only, no data leaves your device) &mdash;{" "}
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
                <li>
                  Account data, coach conversations, shield content, behavioral insights, and social
                  connections are stored securely in Firebase Firestore.
                </li>
                <li>All data is transmitted via HTTPS and encrypted at rest.</li>
                <li>
                  App-blocking preferences remain on your device via Apple&apos;s APIs and are never
                  transmitted to our servers.
                </li>
                <li>
                  AI coach messages are transmitted to Anthropic over encrypted connections and are
                  not retained by Anthropic beyond the request window (per their API data policy).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Data Shared with Other Users</h2>
              <p className="leading-relaxed">
                If you use the Friends feature, the following is visible to users you have added as
                friends:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Your display name</li>
                <li>Your daily unlock time on blocked apps (in minutes)</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                The following is <strong>never</strong> shared with friends or other users:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Your AI coach conversations</li>
                <li>Your shield content and custom prompts</li>
                <li>Your emotional tags or insights data</li>
                <li>Which specific apps you block</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Your Rights &amp; Account Deletion</h2>
              <p className="mb-4 leading-relaxed">You can:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Access</strong> your data by viewing your coach history and insights within
                  the app.
                </li>
                <li>
                  <strong>Delete your account</strong> at any time in the app via Settings &rarr;
                  Delete Account. This permanently removes your account data from our servers.
                </li>
                <li>
                  <strong>Remove friends</strong> at any time, which immediately revokes their access
                  to your unlock-time data.
                </li>
                <li>
                  <strong>Request a full data export or deletion</strong> by contacting us at{" "}
                  <a href="mailto:julianacrispo@gmail.com" className="text-primary hover:underline">
                    julianacrispo@gmail.com
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Data Retention</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Coach conversations, shield content, and insights data are retained until you
                  delete them or delete your account.
                </li>
                <li>
                  Account data is permanently deleted when you delete your account via Settings
                  &rarr; Delete Account.
                </li>
                <li>
                  Analytics data is retained in aggregate form and cannot be tied back to you after
                  account deletion.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Children&apos;s Privacy</h2>
              <p className="leading-relaxed">
                GlowLock is not intended for children under 13. We do not knowingly collect
                information from children under 13. If you believe a child under 13 has provided us
                with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of material
                changes by posting the updated policy in the app or on our website with a revised
                &ldquo;Last Updated&rdquo; date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this privacy policy, your data, or wish to exercise your
                rights, please contact us at:
              </p>
              <p className="mt-4 leading-relaxed">
                <strong>Email:</strong>{" "}
                <a href="mailto:julianacrispo@gmail.com" className="text-primary hover:underline">
                  julianacrispo@gmail.com
                </a>
              </p>
              <p className="mt-2 leading-relaxed">
                <strong>Company:</strong> Metrics Health International LLC
              </p>
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
