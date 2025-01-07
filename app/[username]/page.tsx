import React from 'react'

import { UsersProfileView } from '@/modules/user-profile/pages/profile-view'

const Page = ({ params }: { params: { username: string } }) => {
  console.log(params)

  return (
    <div>
      <UsersProfileView />
    </div>
  )
}

export default Page
