import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'
import getLayout from '@/components/layouts/main'
import ProfileDetail from '@/components/layouts/main/Profile/ProfileDetail'

const Test = () => {
  const router = useRouter()
  console.log(router.query.userid)

  useEffect(() => {
    const { userid } = router.query
    console.log(userid)
    if (userid !== undefined) {
      console.log(userid)
    }
  }, [router.isReady])

  return (
    <div>
      <ProfileDetail />
    </div>
  )
}

Test.getLayout = getLayout

export default Test
