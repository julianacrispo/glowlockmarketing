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
            <p className="font-serif text-3xl italic text-foreground">Hi! I&apos;m Juliana.</p>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                I know what it feels like to lose hours to scrolling and feel worse after.
              </p>
              <p>
                I built GlowLock to help me break that loop and rewire my brain toward
                happiness instead.
              </p>
              <p>
                It changed my life for the better, and I hope it is the same for you.
              </p>
            </div>

            <p className="mt-6 font-serif text-base italic text-foreground">
              See you on the inside.
              <br />
              Juliana
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
