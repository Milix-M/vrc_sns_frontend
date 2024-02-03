import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'
import getLayout from '@/components/layouts/main'
import ProfileDetail from '@/components/layouts/main/Profile/ProfileDetail'

const UserProfile = () => {
  const router = useRouter()

  useEffect(() => {
    const { userid } = router.query
    if (userid !== undefined) {
      console.log(userid)
    }
  }, [router.isReady])

  return (
    <div>
      { router.isReady && (
        <ProfileDetail userid={router.query.userid as string} />
      )}
    </div>
  )
}

UserProfile.getLayout = getLayout

export default UserProfile
