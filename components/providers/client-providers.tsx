'use client'

import { Toaster } from 'sonner'
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { Cookie, X } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/services/react-query/query-client'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AboutMeModal } from '@/components/modals/aboutme-modal'

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted')
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <Card className="fixed bottom-0 right-0 z-[100000000000] w-full rounded-xl border-t border-[#2a2a2a] bg-[#111] p-4 text-white shadow-lg sm:bottom-4 sm:right-4 sm:w-[300px] sm:rounded-xl sm:border">
      <button onClick={handleClose} className="absolute right-2 top-2 text-gray-400 transition-colors hover:text-white" aria-label="Close">
        <X className="h-4 w-4" />
      </button>
      <div className="flex flex-col items-center gap-3">
        <Cookie className="h-8 w-8" />
        <p className="mb-3 text-center text-sm">Our lawyers advised us to tell you that we use cookies to improve user experience.</p>
        <Button onClick={handleAccept} className="w-full rounded-xl bg-white py-2 text-black hover:bg-gray-200">
          I like cookies
        </Button>
      </div>
    </Card>
  )
}

export function BuyMeACoffeeWidget() {
  useEffect(() => {
    const script = document.querySelector('script[data-name="BMC-Widget"]') as HTMLScriptElement
    if (script) {
      script.setAttribute('data-id', 'abdulbacit')
      script.setAttribute('data-description', 'Support me on Buy me a coffee!')
      script.setAttribute('data-message', '')
      script.setAttribute('data-color', '#BD5FFF')
      script.setAttribute('data-position', 'Right')
      script.setAttribute('data-x_margin', '18')
      script.setAttribute('data-y_margin', '18')
    }
  }, [])

  return <Script strategy="lazyOnload" data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" />
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false)

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenAboutMeModal')

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsAboutMeModalOpen(true)
        localStorage.setItem('hasSeenAboutMeModal', 'true')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closeAboutMeModal = () => {
    setIsAboutMeModalOpen(false)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <AboutMeModal isOpen={isAboutMeModalOpen} onClose={closeAboutMeModal} />
      {children}
      <CookieConsent />
      <Analytics />
    </QueryClientProvider>
  )
}
