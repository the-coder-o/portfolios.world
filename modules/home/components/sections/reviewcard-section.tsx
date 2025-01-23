import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'

import { reviews } from '@/.mock/reviews.data'

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure className={cn('relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4', 'dark:border-gray-50/[.1] dark:backdrop-blur-md dark:hover:bg-[#111]')}>
      <div className="flex flex-row items-center justify-between gap-2">
        <div className={'flex items-center gap-2'}>
          <img className="rounded-xl" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <img src="https://peerlist.io/favicon_512.png" alt="peerlist logo" width={20} height={20} />
      </div>
      <blockquote className="mt-2 line-clamp-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <section className={'container relative max-md:pt-5'}>
      <div className={'mb-[200px]'}>
        <h2 className="text-5xl font-bold tracking-tighter text-foreground max-sm:mb-1 max-sm:text-3xl">What People Are Saying</h2>
        <h3 className="mx-auto mb-8 text-balance text-lg font-medium tracking-tight text-foreground/80">
          Don&apos;t just take our word for it. Here&apos;s what <strong>real people</strong> are saying about PortfoliosWorld on Peerlist.io.
        </h3>
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
