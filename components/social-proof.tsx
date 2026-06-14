"use client"

const reviews = [
  {
    name: "Sarah M.",
    text: "I used to open Instagram 40+ times a day without thinking. The shield makes me pause and ask myself why. My screen time dropped by half.",
    rating: 5,
  },
  {
    name: "Jake T.",
    text: "The insights blew my mind. I didn't realize I scroll most when I'm anxious. Now I catch it before it happens.",
    rating: 5,
  },
  {
    name: "Priya K.",
    text: "My screen time dropped by 3 hours in the first week. The customizable shield messages actually make me think twice.",
    rating: 5,
  },
  {
    name: "Marcus L.",
    text: "It is not just an app blocker. It rewires how you think about picking up your phone. My kids and I do it together now.",
    rating: 5,
  },
  {
    name: "Emily R.",
    text: "The habit coach asked me what I was avoiding and it hit me. This is therapy disguised as a phone app. Love it.",
    rating: 5,
  },
  {
    name: "David W.",
    text: "Adding my friends for accountability was the game changer. Knowing they can see my unlock time keeps me honest.",
    rating: 5,
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 text-accent fill-accent" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function SocialProof() {
  return (
    <section className="px-6 py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            --- Reviews ---
          </p>
          <h2 className="font-serif text-3xl md:text-5xl italic text-foreground text-balance">
            96+ Five-Star Reviews
          </h2>
        </div>

        {/* Aggregate rating */}
        <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-5 w-5 text-accent fill-accent" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            Former doomscrollers love us
          </span>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-lg border border-border bg-background p-6 flex flex-col gap-3"
            >
              <StarRating />
              <p className="text-sm leading-relaxed text-foreground">
                {`"${review.text}"`}
              </p>
              {/* Name styled like a cassette label */}
              <div className="mt-auto pt-3 border-t border-border">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
