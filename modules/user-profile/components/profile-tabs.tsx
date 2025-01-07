import { usePathname } from 'next/navigation'
import { MessageCircle } from 'lucide-react'

import { usersProfiletabData } from '@/constants/tab-data'
import { Button } from '@/components/ui/button'

import { TabButton } from './tab-button'

export const ProfileTabs = () => {
  const router = usePathname()

  return (
    <div className="mt-[150px] max-md:mt-7">
      <div className="flex items-center justify-between overflow-x-auto border-b-2 pb-5 scrollbar-hide max-md:max-w-[100%] max-md:pb-2.5">
        <div className="flex w-full items-center gap-3 max-md:gap-0">
          {usersProfiletabData.map((button) => (
            <TabButton key={button.pageUrl} page_url={button.pageUrl} icon={button.icon} title={button.title} is_active={router === button.pageUrl} />
          ))}
        </div>
        <Button className="flex h-10 items-center justify-center gap-1 rounded-xl px-6 py-2 text-sm font-medium transition-colors max-md:h-auto max-md:!w-[140px] max-md:justify-start max-md:bg-transparent max-md:!px-0 max-md:!py-0 max-md:text-[#b4b4b4] max-sm:w-[175px] max-sm:!px-0">
          <MessageCircle size={16} />
          Report
        </Button>
      </div>
    </div>
  )
}
