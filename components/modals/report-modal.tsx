'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export const ReportModal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleReport = (action: 'spam' | 'block') => {
    console.log(`User ${action}ed`)
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="flex h-10 items-center justify-center gap-1 rounded-xl px-6 py-2 text-sm font-medium transition-colors max-md:h-auto max-md:!w-[140px] max-md:justify-start max-md:bg-transparent max-md:!px-0 max-md:!py-0 max-md:text-[#b4b4b4] max-sm:w-[175px] max-sm:!px-0">
          <MessageCircle size={16} />
          Report
        </Button>
      </DialogTrigger>
      <DialogContent className="!rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Report or Block User</DialogTitle>
          <DialogDescription>Choose an action to take for this user.</DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex justify-end space-x-4">
          <Button onClick={() => handleReport('spam')} variant="outline" className="rounded-xl">
            Report as Spam
          </Button>
          <Button onClick={() => handleReport('block')} variant="destructive" className="rounded-xl">
            Block User
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
