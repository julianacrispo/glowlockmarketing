"use client"

export function MarqueeStrip() {
  const items = [
    "PAUSE BEFORE YOU SCROLL",
    "UNDERSTAND YOUR PATTERNS",
    "CUSTOMIZE YOUR SHIELD",
    "BREAK THE HABIT LOOP",
    "TAKE BACK YOUR ATTENTION",
    "INSIGHTS THAT CHANGE BEHAVIOR",
  ]

  return (
    <div className="overflow-hidden border-y border-border bg-card py-3" aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-bold"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
