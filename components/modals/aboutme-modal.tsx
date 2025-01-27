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
      <DialogContent className="gap-0 !rounded-3xl p-0 sm:max-w-[90vw] md:max-w-[750px]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <div className="p-4 sm:p-6 md:p-8 md:pt-12">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="flex flex-row gap-4 md:flex-col">
              <div className="relative h-[100px] w-[100px] flex-shrink-0 rounded-2xl bg-[#FFE55C] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px]">
                <Image src="https://avatars.githubusercontent.com/u/115723431?v=4" alt="Profile picture" fill className="rounded-2xl object-cover" />
              </div>
              <div className="relative h-[100px] w-[100px] flex-shrink-0 rounded-2xl bg-[#FFE55C] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px]">
                <Image src="https://i.ibb.co/ftShz5p/bmc-qr.png" alt="QR code" fill className="rounded-2xl object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 text-center md:h-[48vh] md:text-left">
              <div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-[900] sm:text-3xl md:text-4xl">
                    Hi! <span className="animate-wave inline-block">👋</span> I&apos;m AbdulBasit
                  </h1>
                  <p className="text-lg sm:text-xl">
                    I&apos;m the creator of <span className="bg-gradient-to-r from-[#9C27B0] to-[#FF9800] bg-clip-text !font-bold font-semibold text-transparent">PortfoliosWorld</span>.
                  </p>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-base sm:text-lg">I&apos;m a full-stack JavaScript developer with a deep passion for building things—whether it&apos;s crafting efficient code or creating user-friendly applications.</p>
                  <p className="text-base sm:text-lg">
                    Beyond coding, I love sharing my journey and knowledge through YouTube, where I focus on all things tech and creative vlogging. My videos often blend tutorials, insights, and a behind-the-scenes look at the creative process of building cool stuff.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-medium text-purple-500">Want to get in touch? Here&apos;s how:</p>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
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

function SocialLink({ href, icon }: { href: string; icon: string }) {
  const iconUrls: { [key: string]: string } = {
    github: 'https://api.iconify.design/mdi/github.svg',
    twitter: 'https://api.iconify.design/mdi/twitter.svg',
    linkedin: 'https://api.iconify.design/mdi/linkedin.svg',
    instagram: 'https://api.iconify.design/mdi/instagram.svg',
    behance: 'https://api.iconify.design/mdi/behance.svg',
    medium: 'https://api.iconify.design/mdi/medium.svg',
    dev: 'https://api.iconify.design/mdi/dev-to.svg',
  }

  return (
    <Link href={href} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 sm:h-10 sm:w-10" target="_blank" rel="noopener noreferrer">
      <Image src={iconUrls[icon] || '/placeholder.svg'} alt={`${icon} icon`} width={20} height={20} className="h-4 w-4 sm:h-5 sm:w-5" />
    </Link>
  )
}
