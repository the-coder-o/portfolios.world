import { UserGridSection } from '@/modules/home/components/sections/user-grid-section'
import { TemplatesSection } from '@/modules/home/components/sections/template-section'
import { MarqueeDemo } from '@/modules/home/components/sections/reviewcard-section'
import { AboutSection } from '@/modules/home/components/sections/about-section'
import { LogoCarousel } from '@/components/logo/logo-slider'

import { PortfolioSection } from '../components/sections/portfolio-section'
import { HeroSection } from '../components/sections/hero-section'

export const HomeView = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
      </div>
      <div className="pt-[80px] max-md:pb-10 max-md:pt-10">
        <div className="container">
          <LogoCarousel />
          <PortfolioSection />
          <TemplatesSection />
        </div>
      </div>
      <div className={'max-md:hidden'}>
        <AboutSection />
        <MarqueeDemo />
        <UserGridSection />
      </div>
    </div>
  )
}
