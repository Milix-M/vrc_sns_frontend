import { useRouter } from 'next/router'
import React, { useState } from 'react'
import getLayout from '@/components/layouts/main'
import ProfileDetail from '@/components/layouts/main/Profile/ProfileDetail'
import PostDisplay from '@/components/layouts/main/Post/PostDisplay'
import { useUserInfo, useUserPosts } from '@/hooks/GetUserDatas'

const UserProfile = () => {
  const router = useRouter()
  const display_id = router.query.display_id as string
  const userData = useUserInfo(display_id)
  const userPosts = useUserPosts(display_id, 10)


  return (
    <div className='border-x bg-overlay dark:border-slate-600/80'>
      { router.isReady && (
        <>
          <ProfileDetail userData={userData.userData} />
          {userPosts.userPosts?.map((post) => (
            <PostDisplay userData={userData.userData} postData={post}/>
          ))}
        </>
      )}
    </div>
  )
}

UserProfile.getLayout = getLayout

export default UserProfile
