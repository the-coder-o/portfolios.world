'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BriefcaseBusiness, Globe, LocateFixed, Mail, UserPlus } from 'lucide-react'

import { useGetProfileMe } from '@/modules/edit-profile/hooks/useGetProfileMe'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import OptimizedImage from '@/components/optimize-image'
import { VerificationDialog } from '@/components/modals/verification-modal'

export const ProfileHeader = () => {
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
    <div className="w-full">
      <div className="mb-5 flex w-full items-center justify-between">
        <div className="flex items-center">
          <OptimizedImage src={profile.avatar || 'https://api-private.atlassian.com/users/4c06973565b718b273c7db95e58dca2f/avatar'} alt={`${profile.name.slice(0, 1)}`} width={200} height={200} className="mr-2 !h-[35px] !w-[35px] !rounded-xl border border-border" />
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              {profile.name}
              {profile.email === 'portfoliosworld@gmail.com' && <Image src={'https://telegram.org/file/464001906/107ca/Y-sn47RDLAk.1898/a6ad0e5cfb2699cf01'} width={16} height={16} alt="Verified" className="translate-y-[1px]" />}
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">{profile.role || 'Software Engineer'}</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className={'flex items-center gap-2.5'}>
            <div className="flex items-center gap-2">
              <p className="text-gray-1k text-sm font-normal">
                <span className="text-gray-1k text-xs font-semibold">14+ </span>followers
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Globe size={17} />
              <Link target="_blank" rel="noreferrer nofollow ugc" title="https://www.surydev.site/?ref=peerlist" href="https://www.surydev.site/?ref=peerlist">
                <p className="text-gray-1k text-sm font-normal hover:underline">surydev.site</p>
              </Link>
            </div>
          </div>
          <Button type="button" className="flex h-8 items-center gap-1 rounded-xl">
            <UserPlus size={15} />
            Follow
          </Button>
        </div>
      </div>
      {isLoading ? <Skeleton className="mt-[1px] h-32 w-full rounded-xl md:h-52" /> : <div className="mt-[1px] h-32 w-full rounded-xl bg-cover bg-center object-cover sm:h-40 md:h-52" style={getBannerStyle(profile?.banner)} />}
      <div className="mt-5">
        <div className="-mt-[20px] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-5 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                {isLoading ? (
                  <Skeleton className="h-8 w-40" />
                ) : (
                  <VerificationDialog name={profile.name} img={profile.avatar}>
                    <h1 className="flex cursor-pointer items-center gap-1 rounded-xl px-2.5 text-center text-xl font-[800] text-white hover:bg-secondary sm:text-2xl">
                      {profile?.name || 'N/A'}
                      {profile.email === 'portfoliosworld@gmail.com' ? <Image src={'https://telegram.org/file/464001906/107ca/Y-sn47RDLAk.1898/a6ad0e5cfb2699cf01'} width={25} height={25} alt="tick" /> : null}
                    </h1>
                  </VerificationDialog>
                )}
              </div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
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
              <p className="mt-2 line-clamp-3 w-[700px] text-center text-sm">{profile.bio}</p>
            </div>
            <div className="mt-3 flex flex-shrink-0 items-center gap-2">
              <a target="_blank" rel="nofollow noreferrer" className="px-1" title="X link" href="https://twitter.com/the-coder-o">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3262 2H21.6998L14.3297 10.4234L23 21.886H16.2112L10.894 14.9341L4.80985 21.886H1.43443L9.31754 12.8761L1 2H7.96101L12.7673 8.35433L18.3262 2ZM17.1422 19.8668H19.0115L6.94529 3.91303H4.93956L17.1422 19.8668Z" fill="currentColor" />
                </svg>
              </a>
              <a target="_blank" rel="nofollow noreferrer" className="px-1" title="Youtube link" href="https://youtube.com/the-coder-o">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.5 6.373a3.01 3.01 0 00-2.123-2.123c-1.87-.5-9.377-.5-9.377-.5s-7.502 0-9.377.5A3.01 3.01 0 00.5 6.373C0 8.243 0 12.15 0 12.15s0 3.905.5 5.776a3.01 3.01 0 002.123 2.123c1.875.5 9.377.5 9.377.5s7.506 0 9.377-.5a3.01 3.01 0 002.123-2.123c.5-1.87.5-5.776.5-5.776s0-3.906-.5-5.777z"
                    fill="red"
                  />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.602 15.75l6.235-3.6-6.235-3.6v7.2z" fill="#fff" />
                </svg>
              </a>
              <a target="_blank" rel="nofollow noreferrer" className="px-1" title="Linkedin link" href="https://linkedin.com/in/abdulbosit-sharipov-150a10264">
                <svg width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.75 6.25C8.75 7.625 7.875 8.75 6.25 8.75C4.75 8.75 3.75 7.625 3.75 6.375C3.75 5 4.75 3.75 6.25 3.75C7.75 3.75 8.75 4.875 8.75 6.25ZM3.75 26.25H8.75V10H3.75V26.25ZM20.75 10.25C18.125 10.25 16.625 11.75 16 12.75H15.875L15.625 10.625H11.125C11.125 12 11.25 13.625 11.25 15.5V26.25H16.25V17.375C16.25 16.875 16.25 16.5 16.375 16.125C16.75 15.25 17.375 14.125 18.75 14.125C20.5 14.125 21.25 15.625 21.25 17.625V26.25H26.25V17C26.25 12.375 23.875 10.25 20.75 10.25Z"
                    fill="#2867B2"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              {[
                { name: 'JavaScript', icon: 'javascript.svg' },
                { name: 'TypeScript', icon: 'typescript.svg' },
                { name: 'ReactJS', icon: 'reactjs.svg' },
                { name: 'NodeJS', icon: 'nodejs.svg' },
                { name: 'NextJS', icon: 'nextjs.svg', darkInvert: true },
                { name: 'React Native', icon: 'react_native.svg' },
                { name: 'MongoDB', icon: 'mongodb.svg' },
                { name: 'AWS', icon: 'aws.svg' },
                { name: 'TailwindCSS', icon: 'tailwindcss.svg' },
              ].map(({ name, icon, darkInvert }, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <button type="button" className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-0.5 text-sm">
                    {icon && <img src={`https://d26c7l40gvbbg2.cloudfront.net/tool_icons/${icon}`} alt={`${name} icon`} width="14" height="14" className={`h-[14px] w-[14px] object-cover ${darkInvert ? 'dark:invert' : ''}`} />}
                    <span>{name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
