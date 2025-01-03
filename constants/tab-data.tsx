import { Bookmark, BriefcaseBusiness, Heart } from 'lucide-react'

export const tabData = [
  {
    pageUrl: '/profile/portfolios',
    icon: <BriefcaseBusiness size={17} />,
    title: 'Your Portfolios',
  },
  {
    pageUrl: '/profile/favorites',
    icon: <Bookmark size={17} />,
    title: 'Favorite Portfolios',
  },
  {
    pageUrl: '/profile/liked',
    icon: <Heart size={17} />,
    title: 'Liked Portfolios',
  },
  // {
  //   pageUrl: '/profile/about',
  //   icon: <User size={17} />,
  //   title: 'About Me',
  // },
]
