import { Book, Bookmark, BriefcaseBusiness, FileUser, FolderOpen, Heart } from 'lucide-react'

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
]

export const usersProfiletabData = [
  {
    pageUrl: '/profile/portfolios',
    icon: <BriefcaseBusiness size={17} />,
    title: 'Portfolios',
  },
  {
    pageUrl: '/profile/projects',
    icon: <FolderOpen size={17} />,
    title: 'Projects',
  },
  {
    pageUrl: '/profile/work',
    icon: <Book size={17} />,
    title: 'Work',
  },
  {
    pageUrl: '/profile/resume',
    icon: <FileUser size={17} />,
    title: 'Resume',
  },
]
