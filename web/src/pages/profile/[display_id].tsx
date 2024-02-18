import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import getLayout from '@/components/layouts/main'
import ProfileDetail from '@/components/layouts/main/Profile/ProfileDetail'
import PostDisplay from '@/components/layouts/main/Post/PostDisplay'
import { useUserInfo } from '@/hooks/GetUserDatas'
import { useInView } from 'react-intersection-observer'
import { Spinner } from '@nextui-org/react'
import useGetPostInfinite from '@/hooks/useGetPostInfinite'

const UserProfile = () => {
  const router = useRouter()
  const display_id = router.query.display_id as string
  const userData = useUserInfo(display_id)

  const {
    data: posts,
    isValidating,
    isReachingEnd,
    fetchMore
  } = useGetPostInfinite(`/api/users/${display_id}/posts`, 10)

  const { ref, inView: isScrollEnd } = useInView({
    rootMargin: '100px'
  })

  useEffect(() => {
    if (isScrollEnd && !isValidating && !isReachingEnd) {
      fetchMore()
    }
  }, [isScrollEnd])

  return (
    <div className='border-x dark:border-slate-700/70'>
      {router.isReady && (
        <>
          <ProfileDetail userData={userData.userData} />
          {posts?.map((post, index) => (
            <PostDisplay
              userData={userData.userData}
              postData={post}
              key={post.postid}
            />
          ))}

          {!isValidating && <div ref={ref} aria-hidden='true' />}

          {isValidating && (
            <div className='flex justify-center p-12'>
              <Spinner />
            </div>
          )}
        </>
      )}
    </div>
  )
}

UserProfile.getLayout = getLayout

export default UserProfile
