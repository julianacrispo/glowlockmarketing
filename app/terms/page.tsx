import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | GlowLock",
  description: "Terms of Service for GlowLock.",
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
          <h1 className="mb-4 text-4xl font-serif">Terms of Service</h1>
          <p className="mb-2 text-lg font-medium">Glowlock</p>
          <p className="mb-8 text-muted-foreground">Last Updated: February 7, 2026</p>

          <div className="space-y-8 text-foreground/90">
            <p className="leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of the Glowlock
              mobile application (the "App"), operated by Metrics Health International LLC ("we,"
              "us," or "our"). By downloading, accessing, or using the App, you agree to be bound
              by these Terms. If you do not agree to these Terms, do not use the App.
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-serif">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By creating an account or using the App, you represent that you are at least 13
                years of age and have the legal capacity to enter into these Terms. If you are
                under 18, you represent that you have obtained parental or guardian consent to use
                the App.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">2. Description of Service</h2>
              <p className="mb-4 leading-relaxed">
                Glowlock is a productivity and wellness application that provides:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Screen time control and management features</li>
                <li>A gratitude journal for daily reflection and mental wellness</li>
                <li>User account creation and data storage</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of the Service
                at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">3. User Accounts</h2>
              <h3 className="mb-3 mt-6 text-xl font-serif">3.1 Account Creation</h3>
              <p className="leading-relaxed">
                To use certain features of the App, you must create an account. You agree to
                provide accurate, current, and complete information during registration and to
                update such information to keep it accurate, current, and complete. You are
                responsible for maintaining the confidentiality of your account credentials and for
                all activities that occur under your account.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">3.2 Account Security</h3>
              <p className="leading-relaxed">
                You are solely responsible for safeguarding your password and for any activities or
                actions under your account. You must notify us immediately of any unauthorized use
                of your account or any other breach of security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">4. Subscriptions and Payment</h2>
              <h3 className="mb-3 mt-6 text-xl font-serif">4.1 Subscription Plans</h3>
              <p className="leading-relaxed">
                The App offers subscription-based access to premium features on a monthly or annual
                basis. By purchasing a subscription, you authorize us to charge your chosen payment
                method for the subscription fees.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">4.2 Free Trial</h3>
              <p className="leading-relaxed">
                We offer a 3-day free trial for new subscribers. If you do not cancel before the
                end of the trial period, your subscription will automatically begin, and you will
                be charged the applicable subscription fee. You may cancel your trial at any time
                through your Apple App Store account settings.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">4.3 Billing and Renewal</h3>
              <p className="leading-relaxed">
                Subscriptions automatically renew at the end of each billing period (monthly or
                annually) unless canceled at least 24 hours before the renewal date. You will be
                charged through your Apple App Store account. All billing is handled by Apple, and
                you should review Apple&apos;s terms and policies regarding subscriptions, refunds,
                and cancellations.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">4.4 Cancellation</h3>
              <p className="leading-relaxed">
                You may cancel your subscription at any time through your Apple App Store account
                settings. Upon cancellation, you will continue to have access to premium features
                until the end of your current billing period. No refunds will be provided for
                partial subscription periods.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">4.5 Payment Processing</h3>
              <p className="leading-relaxed">
                Subscription payments and revenue management are processed through RevenueCat and
                the Apple App Store. By subscribing, you agree to their respective terms and
                conditions.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">5. User Content and Conduct</h2>
              <h3 className="mb-3 mt-6 text-xl font-serif">5.1 Your Content</h3>
              <p className="leading-relaxed">
                You retain ownership of any content you create, upload, or submit through the App,
                including gratitude journal entries ("User Content"). By submitting User Content,
                you grant us a limited, non-exclusive license to use, store, and process your
                content solely for the purpose of providing and improving the Service.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">5.2 Prohibited Conduct</h3>
              <p className="mb-4 leading-relaxed">You agree not to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to the App or its related systems</li>
                <li>Interfere with or disrupt the App&apos;s functionality or servers</li>
                <li>Transmit any viruses, malware, or other malicious code</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">6. Data Collection and Privacy</h2>
              <h3 className="mb-3 mt-6 text-xl font-serif">6.1 Data We Collect</h3>
              <p className="leading-relaxed">
                We collect and store personal information including your account information (email,
                name) and User Content such as gratitude journal entries and screen time usage
                data. Our collection and use of personal information is governed by our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">6.2 Third-Party Services</h3>
              <p className="mb-4 leading-relaxed">
                The App integrates with the following third-party services to provide
                functionality:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>OpenAI Whisper</strong> - for voice-to-text transcription of gratitude
                  journal entries
                </li>
                <li>
                  <strong>Anthropic Claude</strong> - for validation and processing of gratitude
                  journal content
                </li>
                <li>
                  <strong>Firebase</strong> - for secure data storage and authentication
                </li>
                <li>
                  <strong>RevenueCat</strong> - for subscription management and payment processing
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                By using the App, you acknowledge that your data may be transmitted to and
                processed by these third-party services in accordance with their respective privacy
                policies and terms of service. We encourage you to review the privacy policies of
                these third parties.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">6.3 Data Security</h3>
              <p className="leading-relaxed">
                We implement reasonable security measures to protect your information. However, no
                method of transmission over the Internet or electronic storage is 100% secure.
                While we strive to protect your personal information, we cannot guarantee its
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">7. Data Retention and Account Termination</h2>
              <h3 className="mb-3 mt-6 text-xl font-serif">7.1 Subscription Cancellation</h3>
              <p className="leading-relaxed">
                If you cancel your subscription, your account will be converted to read-only
                access. You will be able to view your historical data (including gratitude journal
                entries and screen time statistics) but will not be able to create new entries or
                access premium features. Your data will be retained indefinitely unless you request
                account deletion.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">7.2 Account Deletion</h3>
              <p className="leading-relaxed">
                You may request deletion of your account and all associated data at any time by
                contacting us. Upon receiving your request, we will permanently delete your account
                and User Content within 30 days, except where retention is required by law.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">7.3 Termination by Us</h3>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your account at any time, with or
                without notice, for any reason, including but not limited to violation of these
                Terms or suspected fraudulent, abusive, or illegal activity.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">8. Intellectual Property</h2>
              <p className="leading-relaxed">
                The App and its original content, features, and functionality are owned by Metrics
                Health International LLC and are protected by international copyright, trademark,
                patent, trade secret, and other intellectual property laws. You may not copy,
                modify, distribute, sell, or lease any part of the App without our express written
                permission.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">
                9. Disclaimers and Limitations of Liability
              </h2>
              <h3 className="mb-3 mt-6 text-xl font-serif">9.1 No Warranty</h3>
              <p className="text-sm uppercase leading-relaxed">
                THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
                WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR
                OTHER HARMFUL COMPONENTS.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">9.2 Not Medical or Therapeutic Advice</h3>
              <p className="leading-relaxed">
                The gratitude journal and wellness features of the App are intended for general
                informational and personal reflection purposes only. They do not constitute medical,
                psychological, or therapeutic advice. If you are experiencing mental health
                concerns, please consult a qualified healthcare professional.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">9.3 Limitation of Liability</h3>
              <p className="text-sm uppercase leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, METRICS HEALTH INTERNATIONAL LLC SHALL NOT
                BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR
                INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
                RESULTING FROM: (A) YOUR USE OR INABILITY TO USE THE APP; (B) ANY UNAUTHORIZED
                ACCESS TO OR USE OF YOUR DATA; (C) ANY INTERRUPTION OR CESSATION OF THE APP; OR (D)
                ANY BUGS, VIRUSES, OR OTHER HARMFUL CODE.
              </p>
              <p className="mt-4 text-sm uppercase leading-relaxed">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT YOU
                PAID US IN THE TWELVE (12) MONTHS PRIOR TO THE CLAIM, OR ONE HUNDRED DOLLARS
                ($100), WHICHEVER IS GREATER.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">10. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Metrics Health International LLC,
                its officers, directors, employees, agents, and affiliates from and against any
                claims, liabilities, damages, losses, and expenses, including reasonable
                attorneys&apos; fees, arising out of or in any way connected with: (a) your access
                to or use of the App; (b) your User Content; (c) your violation of these Terms; or
                (d) your violation of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">11. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. If we make material
                changes, we will notify you by email or through a notice in the App prior to the
                changes taking effect. Your continued use of the App after such modifications
                constitutes your acceptance of the updated Terms. If you do not agree to the
                modified Terms, you must stop using the App.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">12. Governing Law and Dispute Resolution</h2>
              <h3 className="mb-3 mt-6 text-xl font-serif">12.1 Governing Law</h3>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the
                state in which Metrics Health International LLC is registered, without regard to
                its conflict of law provisions.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">12.2 Dispute Resolution</h3>
              <p className="leading-relaxed">
                Any dispute arising out of or relating to these Terms or the App shall be resolved
                through binding arbitration in accordance with the rules of the American Arbitration
                Association. The arbitration shall take place in the state where Metrics Health
                International LLC is registered. Each party shall bear its own costs and expenses.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">13. Apple-Specific Terms</h2>
              <p className="mb-4 leading-relaxed">
                If you access the App through the Apple App Store, the following additional terms
                apply:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  These Terms are between you and Metrics Health International LLC only, not with
                  Apple Inc. ("Apple"), and Apple is not responsible for the App or its content.
                </li>
                <li>Apple has no obligation to provide maintenance or support services for the App.</li>
                <li>
                  In the event of any failure of the App to conform to any applicable warranty, you
                  may notify Apple, and Apple will refund the purchase price (if any) to you. To
                  the maximum extent permitted by law, Apple has no other warranty obligation with
                  respect to the App.
                </li>
                <li>
                  Apple is not responsible for addressing any claims by you or any third party
                  relating to the App or your possession and/or use of the App, including but not
                  limited to: (a) product liability claims; (b) any claim that the App fails to
                  conform to any applicable legal or regulatory requirement; and (c) claims arising
                  under consumer protection or similar legislation.
                </li>
                <li>
                  In the event of any third-party claim that the App or your possession and use of
                  the App infringes that third party&apos;s intellectual property rights, Metrics
                  Health International LLC, not Apple, is solely responsible for the investigation,
                  defense, settlement, and discharge of any such intellectual property infringement
                  claim.
                </li>
                <li>
                  You represent and warrant that: (a) you are not located in a country that is
                  subject to a U.S. Government embargo or that has been designated by the U.S.
                  Government as a "terrorist supporting" country; and (b) you are not listed on
                  any U.S. Government list of prohibited or restricted parties.
                </li>
                <li>
                  Apple and its subsidiaries are third-party beneficiaries of these Terms, and upon
                  your acceptance of these Terms, Apple will have the right to enforce these Terms
                  against you as a third-party beneficiary.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">14. General Provisions</h2>
              <h3 className="mb-3 mt-6 text-xl font-serif">14.1 Entire Agreement</h3>
              <p className="leading-relaxed">
                These Terms, together with our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                , constitute the entire agreement between you and Metrics Health International LLC
                regarding the App and supersede all prior agreements and understandings.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">14.2 Severability</h3>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the
                remaining provisions shall remain in full force and effect.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">14.3 Waiver</h3>
              <p className="leading-relaxed">
                No waiver of any term of these Terms shall be deemed a further or continuing waiver
                of such term or any other term.
              </p>
              <h3 className="mb-3 mt-6 text-xl font-serif">14.4 Assignment</h3>
              <p className="leading-relaxed">
                You may not assign or transfer these Terms or your rights hereunder without our
                prior written consent. We may assign these Terms without restriction.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-serif">15. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms or the App, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Metrics Health International LLC</strong>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:julianacrispo@gmail.com" className="text-primary hover:underline">
                    julianacrispo@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://metricshealth.com"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    metricshealth.com
                  </a>
                </p>
              </div>
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
