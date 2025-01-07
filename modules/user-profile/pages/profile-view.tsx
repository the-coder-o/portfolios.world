'use client'

import { ProfileTabs } from '../components/profile-tabs'
import { ProfileHeader } from '../components/profile-header'

export const UsersProfileView = () => {
  return (
    <div className="container">
      <div className="mb-[1000px] mt-[90px]">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </div>
  )
}
