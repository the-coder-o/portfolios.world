'use client'

import * as React from 'react'
import Image from 'next/image'
import { BadgeCheck, Clock } from 'lucide-react'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface VerificationDialogProps {
  name: string
  img: string
  children: React.ReactNode
}

export const VerificationModal = ({ name, img, children }: VerificationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!rounded-xl sm:max-w-md">
        <DialogHeader className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Image src={img} width={80} height={80} alt={name} className="rounded-2xl" />
            <Image src={'https://telegram.org/file/464001906/107ca/Y-sn47RDLAk.1898/a6ad0e5cfb2699cf01'} width={20} height={20} alt={'tick'} className="absolute -bottom-1 -right-2 h-6 w-6" />
          </div>
          <DialogTitle className="text-xl font-bold">{name}</DialogTitle>
        </DialogHeader>
        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-medium">We&apos;re checking! About 24 hours</span>
            <span className="ml-auto rounded-lg bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-500">Unverified</span>
          </div>
        </div>
        <p className="w-full text-center text-sm text-muted-foreground">Get verified to receive a blue checkmark badge and unlock exclusive features on our platform. </p>
        <div className="flex justify-between">
          <Button variant="default" className={'flex w-full items-center gap-1.5 rounded-xl'}>
            Request to get
            <BadgeCheck size={15} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
