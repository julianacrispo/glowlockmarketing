import { Apple } from "lucide-react"
import Image from "next/image"

export function FinalCta() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        {/* Brain icon decoration */}
        <div className="flex justify-center mb-8">
          <Image
            src="/brain-icon.png"
            alt=""
            width={48}
            height={48}
            className="opacity-30"
          />
        </div>

        <h2 className="font-serif text-4xl md:text-6xl italic text-foreground text-balance leading-[1.1]">
          Reclaim your brain, one reflection at a time.
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          Join hundreds who traded mindless scrolling for presence and gratitude.
        </p>

        {/* iOS CTA */}
        <a
          href="https://apps.apple.com/app/glowlock"
          className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-primary px-10 py-5 text-primary-foreground text-sm uppercase tracking-[0.15em] font-bold transition-all hover:bg-foreground hover:scale-[1.02] active:scale-[0.98]"
        >
          <Apple className="h-5 w-5" />
          Get It on iOS
        </a>

        {/* Social proof */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-3.5 w-3.5 text-accent fill-accent" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground tracking-wider">
            96+ Five-Star Reviews
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground tracking-wider">
          Former doomscrollers love us
        </p>
      </div>
    </section>
  )
}
