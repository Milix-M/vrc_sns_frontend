import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'
import getLayout from '@/components/layouts/main'
import ProfileDetail from '@/components/layouts/main/Profile/ProfileDetail'
import PostDisplay from '@/components/layouts/main/Post/PostDisplay'

const UserProfile = () => {
  const router = useRouter()

  useEffect(() => {
    const { userid } = router.query
    if (userid !== undefined) {
      console.log(userid)
    }
  }, [router.isReady])

  return (
    <div className='border-x bg-overlay dark:border-slate-600/80'>
      { router.isReady && (
        <ProfileDetail display_id={router.query.userid as string} />
      )}
      <PostDisplay />
      <PostDisplay />
      <PostDisplay />
      <PostDisplay />
      <PostDisplay />
    </div>
  )
}

UserProfile.getLayout = getLayout

export default UserProfile
