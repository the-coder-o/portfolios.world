'use client'

import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'

import { Dialog, DialogContent } from '@/components/ui/dialog'

interface IntroductionModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AboutMeModal = ({ isOpen, onClose }: IntroductionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="gap-0 !rounded-3xl p-0 sm:max-w-[750px]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <div className="p-8 pt-12">
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className={'flex flex-col gap-2'}>
              <div className="relative mx-auto h-[200px] w-[200px] flex-shrink-0 rounded-full bg-[#FFE55C] md:mx-0">
                <Image src="https://avatars.githubusercontent.com/u/115723431?v=4" alt="Profile picture" width={250} height={250} className="h-full w-full rounded-3xl object-cover" />
              </div>
              <div className="relative mx-auto h-[200px] w-[200px] flex-shrink-0 rounded-full bg-[#FFE55C] md:mx-0">
                <Image src="https://i.ibb.co/ftShz5p/bmc-qr.png" alt="Profile picture" width={250} height={250} className="h-full w-full rounded-3xl object-cover" />
              </div>
            </div>
            <div className="flex h-[48vh] flex-col justify-between space-y-6 text-center md:text-left">
              <div>
                <div className="space-y-2">
                  <h1 className="text-4xl font-[900]">
                    Hi! <span className="animate-wave inline-block">👋</span> I&apos;m AbdulBasit
                  </h1>
                  <p className="text-xl">
                    I&apos;m the creator of <span className="bg-gradient-to-r from-[#9C27B0] to-[#FF9800] bg-clip-text !font-bold font-semibold text-transparent">PortfoliosWorld</span>.
                  </p>
                </div>
                <br />
                <div className={'flex flex-col gap-2'}>
                  <p className="text-lg">I’m a full-stack JavaScript developer with a deep passion for building things—whether it’s crafting efficient code or creating user-friendly applications.</p>
                  <p className="text-lg">Beyond coding, I love sharing my journey and knowledge through YouTube, where I focus on all things tech and creative vlogging. My videos often blend tutorials, insights, and a behind-the-scenes look at the creative process of building cool stuff.</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-medium text-purple-500">Want to get in touch? Here&apos;s how:</p>
                <div className="flex justify-center gap-4 md:justify-start">
                  <SocialLink href="https://github.com/the-coder-o" icon="github" />
                  <SocialLink href="https://twitter.com/portfoliocworld" icon="twitter" />
                  <SocialLink href="https://linkedin.com/in/abdulbosit-sharipov-150a10264" icon="linkedin" />
                  <SocialLink href="https://instagram.com/bosit.xonn" icon="instagram" />
                  <SocialLink href="https://behance.net" icon="behance" />
                  <SocialLink href="https://medium.com" icon="medium" />
                  <SocialLink href="https://dev.to" icon="dev" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function SocialLink({ href, icon }: any) {
  const iconUrls = {
    github: 'https://api.iconify.design/mdi/github.svg',
    twitter: 'https://api.iconify.design/mdi/twitter.svg',
    linkedin: 'https://api.iconify.design/mdi/linkedin.svg',
    instagram: 'https://api.iconify.design/mdi/instagram.svg',
    behance: 'https://api.iconify.design/mdi/behance.svg',
    medium: 'https://api.iconify.design/mdi/medium.svg',
    dev: 'https://api.iconify.design/mdi/dev-to.svg',
  }

  return (
    <Link href={href} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
      <Image src={iconUrls[icon as keyof typeof iconUrls] || '/placeholder.svg'} alt={`${icon} icon`} width={20} height={20} className="h-5 w-5" />
    </Link>
  )
}
