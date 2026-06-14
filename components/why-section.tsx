export function WhySection() {
  return (
    <section className="px-6 py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            --- The Science ---
          </p>
          <h2 className="font-serif text-3xl md:text-5xl italic text-foreground text-balance leading-[1.15]">
            Willpower doesn&apos;t work. Systems do.
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            GlowLock is built on proven principles of habit formation psychology —
            implementation intentions, identity reinforcement, and the power of a
            pause before compulsive action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center text-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary border border-border shadow-[2px_3px_0px_0px] shadow-border">
              <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground">
              The Pause
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A brief interruption before compulsive action is all it takes to break
              the autopilot loop. Your shield creates that moment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center text-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary border border-border shadow-[2px_3px_0px_0px] shadow-border">
              <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground">
              Real Insights
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              See which emotions drive you to scroll. When you understand the why,
              you can finally change the behavior.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center text-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary border border-border shadow-[2px_3px_0px_0px] shadow-border">
              <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground">
              Identity Shift
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your shield reinforces who you want to be. Over time, &ldquo;I don&apos;t
              scroll&rdquo; becomes part of your identity — not a rule you force.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
