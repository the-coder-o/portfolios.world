import React from 'react'

import { portfoliosData } from '@/.mock/portfolios.data'
import { Cover } from '@/components/animation/cover'
import { PlaceholdersAndVanishInput } from '@/components/animation/placeholders-and-vanish-input'

export const HeroSection = () => {
  const placeholders = ['Explore the top portfolio templates in my project.', 'Discover the best designs to showcase your work.', 'Create a stunning portfolio with ease.', 'Find your perfect portfolio template here.', 'Build your portfolio using top-rated designs.']

  return (
    <div className="relative mb-[180px] flex flex-col overflow-hidden max-sm:mb-10 sm:items-center sm:text-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="relative z-20 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white max-sm:text-start md:text-4xl lg:text-7xl">
          Best place to find <br /> portfolio <Cover>inspiration.</Cover>
        </h1>
        <p className="relative z-20 max-w-4xl text-center text-base font-normal leading-normal text-neutral-600 dark:text-neutral-200 max-sm:text-start md:text-[22px]">
          Unlock your potential with our curated collection of {portfoliosData?.length}+ exceptional portfolio designs. Each template is crafted to highlight your unique skills and creativity, helping you stand out in any industry.
        </p>
        <PlaceholdersAndVanishInput placeholders={placeholders} />
      </div>
    </div>
  )
}
