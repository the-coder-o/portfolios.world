'use client'

import React, { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { sortOptions } from '@/constants/sort-option'
import { languageTools } from '@/constants/language-tools'
import { jobCategories } from '@/constants/job-categories'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { PortfolioCard } from '@/components/cards/portfolio-card'

import { portfoliosData } from '@/.mock/portfolios.data'

export const Portfolioscard = () => {
  const itemsPerPage = 6

  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState('All')
  const [displayedItems, setDisplayedItems] = useState(portfoliosData.slice(0, itemsPerPage))

  const loadMoreItems = () => {
    const nextPage = currentPage + 1
    const newItems = portfoliosData.slice(0, itemsPerPage * nextPage)
    setDisplayedItems(newItems)
    setCurrentPage(nextPage)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 50 >= document.documentElement.scrollHeight) {
        loadMoreItems()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  return (
    <div className="mb-[120px] space-y-2">
      <div className="flex items-center justify-between gap-10 max-md:flex-col">
        <div className="flex-1 overflow-x-auto scrollbar-hide max-md:max-w-[100%]">
          <div className="flex items-center gap-1 whitespace-nowrap px-4 py-4 max-md:p-0">
            {jobCategories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.name}
                  size="sm"
                  onClick={() => setActiveCategory(category.name)}
                  className={cn('flex-shrink-0 rounded-xl border-2 border-[#000] hover:border-green-300 hover:bg-green-700', activeCategory === category.name ? 'border-2 border-green-300 bg-green-700 text-white' : 'bg-transparent text-white')}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-2 max-md:mb-4 max-md:w-full max-sm:flex-col">
          <Select>
            <SelectTrigger className="h-11 w-[180px] rounded-xl max-md:w-full">
              <SelectValue placeholder="Sort By languages" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {languageTools.map((value, index) => (
                <SelectItem key={index} value={value.name} className="rounded-lg">
                  {value.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-11 w-[180px] rounded-xl max-md:w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {sortOptions.map((value, index) => (
                <SelectItem key={index} value={value.name} className="rounded-lg">
                  {value.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 px-4 max-md:px-0 sm:grid-cols-2 lg:grid-cols-3">
        {displayedItems.map((card, index) => (
          <PortfolioCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}
