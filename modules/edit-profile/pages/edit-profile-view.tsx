'use client'

import Image from 'next/image'
import { BriefcaseBusiness, LocateFixed, Mail } from 'lucide-react'

import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UploadBannerModal } from '@/components/modals/upload-banner-modal'
import { UploadAvatarModal } from '@/components/modals/upload-avatar-modal'

import { useGetProfileMe } from '../hooks/useGetProfileMe'
import { Sidebar } from '../components/sidebar/sidebar'

export const EditProfileView = () => {
  const { data: profile, isLoading } = useGetProfileMe()

  const getBannerStyle = (banner: string | undefined) => {
    if (!banner) return { background: '#ff9a9e' }

    try {
      new URL(banner)
      return { backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    } catch {
      return { background: banner }
    }
  }

  return (
    <section className="container">
      <div className="relative">
        {isLoading ? <Skeleton className="mt-[120px] h-32 w-full rounded-xl md:h-52" /> : <div className="mt-[120px] h-32 w-full rounded-xl bg-cover bg-center object-cover sm:h-40 md:h-52" style={getBannerStyle(profile?.banner)} />}
        <div className="mt-5 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-5">
          <div className="flex flex-col max-sm:items-start sm:flex-row sm:items-center sm:gap-5">
            <div>
              {isLoading ? (
                <Skeleton className="h-20 w-20 rounded-[16px] sm:h-24 sm:w-24 sm:rounded-[20px]" />
              ) : (
                <Avatar className="h-20 w-20 rounded-[16px] sm:h-24 sm:w-24 sm:rounded-[20px]">
                  <AvatarImage src={profile?.avatar} alt="Profile" className="rounded-xl" />
                  <AvatarFallback className="rounded-xl text-xl sm:text-2xl">{profile?.name?.slice(0, 2) || '?'}</AvatarFallback>
                </Avatar>
              )}
            </div>
            <div className="max-sm:mt-2 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-1">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                {isLoading ? (
                  <Skeleton className="h-8 w-40" />
                ) : (
                  <>
                    <h1 className="text-xl font-semibold text-white sm:text-2xl">{profile?.name || 'N/A'}</h1>
                    {profile.email === 'portfoliosworld@gmail.com' ? <Image src={'https://telegram.org/file/464001906/107ca/Y-sn47RDLAk.1898/a6ad0e5cfb2699cf01'} width={25} height={25} alt="tick" /> : null}
                  </>
                )}
              </div>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                {isLoading ? (
                  <Skeleton className="h-6 w-32" />
                ) : (
                  <p className="sm:text-md flex items-center gap-1 text-sm dark:text-[#999]">
                    <BriefcaseBusiness size={18} />
                    {profile?.role ? profile?.role : 'Not found role'}
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className="h-6 w-32" />
                ) : (
                  <p className="sm:text-md flex items-center gap-1 text-sm dark:text-[#999]">
                    <LocateFixed size={18} />
                    {profile?.location ? profile?.location : 'Not found location'}
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className="mt-1 h-6 w-40 sm:mt-0" />
                ) : (
                  <p className="sm:text-md mt-1 flex items-center gap-1 text-sm dark:text-[#999] sm:mt-0">
                    <Mail size={18} />
                    {profile?.email ? profile?.email : 'Not found email'}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className={'flex items-center gap-2 max-sm:w-full'}>
            <UploadAvatarModal profile={profile} />
            <UploadBannerModal profile={profile} />
          </div>
        </div>
      </div>
      <div className="mb-[100px] mt-5 sm:mb-[150px] sm:mt-32 md:mt-[100px]">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : (
          <Sidebar />
        )}
      </div>
    </section>
  )
}
