import Image from "next/image"

export function FounderNote() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="relative h-56 w-56 flex-shrink-0 overflow-hidden rounded-2xl md:h-64 md:w-64">
            <Image
              src="/juliana.png"
              alt="Juliana, founder of GlowLock"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 224px, 256px"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="font-serif text-3xl italic text-foreground">Hi!</p>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                I&apos;m Juliana. GlowLock was built by me — not the 21 trillion
                dollar big tech industry focused on stealing your attention.
              </p>
              <p>
                I struggled to stay off my phone and stay grateful for my real
                life, so I built GlowLock to fix that. It has changed my life
                and I hope it changes yours for the better too.
              </p>
            </div>

            <p className="mt-6 font-serif text-base italic text-foreground">
              With Love &amp; Gratitude,
              <br />
              Juliana
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
