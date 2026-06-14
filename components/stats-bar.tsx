"use client"

import { useEffect, useRef, useState } from "react"

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const start = performance.now()

          function animate(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-bold text-3xl md:text-4xl text-foreground tabular-nums">
      {value.toLocaleString()}{suffix}
    </div>
  )
}

export function StatsBar() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Dashed line top */}
        <div className="h-px border-t border-dashed border-border mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <AnimatedNumber target={96} suffix="+" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
              5-Star Reviews
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AnimatedNumber target={50000} suffix="+" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Scroll Sessions Blocked
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AnimatedNumber target={12000} suffix="+" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Shields Activated
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AnimatedNumber target={347} />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Days of Life Saved
            </span>
          </div>
        </div>

        {/* Dashed line bottom */}
        <div className="h-px border-t border-dashed border-border mt-12" />
      </div>
    </section>
  )
}
