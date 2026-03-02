export function WhySection() {
  return (
    <section className="px-6 py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            --- The Problem ---
          </p>
          <h2 className="font-serif text-3xl md:text-5xl italic text-foreground text-balance leading-[1.15]">
            You pick up your phone 96 times a day
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            The average person spends 2 hours and 31 minutes daily on social media. That
            is 38 days every year, gone. What if you could trade even a fraction of that
            for something that actually fills you up?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center text-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary border border-border shadow-[2px_3px_0px_0px] shadow-border">
              <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground">
              No Willpower Needed
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              GlowLock intercepts the habit loop automatically. Your addictive apps
              are locked until gratitude is complete.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center text-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary border border-border shadow-[2px_3px_0px_0px] shadow-border">
              <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground">
              Voice, Not Text
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Speaking gratitude out loud rewires your brain faster than typing.
              It takes 30 seconds and it is deeply personal.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center text-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary border border-border shadow-[2px_3px_0px_0px] shadow-border">
              <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground">
              Watch Yourself Grow
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Track days of life saved, scroll sessions avoided, and listen back
              to your gratitude tapes as your collection grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
