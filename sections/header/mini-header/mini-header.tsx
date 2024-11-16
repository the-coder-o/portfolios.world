'use client'

import Link from 'next/link'

import { useIsAuth } from '@/hooks/use-isAuth'
import { ProfileMenu } from '@/components/profile-menu'
import { Searchmodal } from '@/components/modals/search-modal'
import { FeedbackModal } from '@/components/modals/feedback-modal'

export const MiniHeader = () => {
  const isAuthUser = useIsAuth()

  return (
    <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
      <div className="max-xl:hidden">
        <Searchmodal />
      </div>
      <div className="max-md:hidden">
        <FeedbackModal />
      </div>
      {isAuthUser ? (
        <ProfileMenu />
      ) : (
        <Link href="/sign-in" className="group relative z-20 hidden h-10 cursor-pointer items-center justify-center space-x-2 rounded-xl bg-black p-px px-8 py-2 text-center text-sm font-semibold text-white no-underline transition duration-200 dark:bg-white dark:text-black sm:flex">
          Login
        </Link>
      )}
    </div>
  )
}
