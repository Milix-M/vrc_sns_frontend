import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import getLayout from '@/components/layouts/main'
import ProfileDetail from '@/components/layouts/main/Profile/ProfileDetail'
import PostDisplay from '@/components/layouts/main/Post/PostDisplay'
import { useUserInfo } from '@/hooks/GetUserDatas'
import { PostType } from 'lib/types'
import useSWRInfinite from 'swr/infinite'
import fetcher from 'lib/fetcher'
import { useInView } from 'react-intersection-observer'

const UserProfile = () => {
  const router = useRouter()
  const display_id = router.query.display_id as string
  const userData = useUserInfo(display_id)
  const [isReachingEnd, setIsReachingEnd] = useState(false)

  const getKey = (pageIndex: number, previousPageData: PostType[][]) => {
    if (pageIndex === 0) return `/api/users/${display_id}/posts?limit=10`
    if (previousPageData.flat().at(-1)?.postid === undefined) {
      setIsReachingEnd(true)
      return null
    }
    return `/api/users/${display_id}/posts?limit=10&untilid=${previousPageData.flat().at(-1)?.postid}`
  }

  const { data, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher, {
    revalidateIfStale: false, // キャッシュがあっても再検証
    revalidateOnFocus: false, // windowをフォーカスすると再検証
    revalidateFirstPage: false, // 2ページ目以降を読み込むとき毎回1ページ目を再検証
  })

  const { ref, inView: isScrollEnd } = useInView({
    rootMargin: '20px',
  })

  useEffect(() => {
    if (isScrollEnd && !isValidating && !isReachingEnd) {
      setSize(size + 1)
    }
  }, [isScrollEnd])

  return (
    <div className='border-x dark:border-slate-600/80'>
      { router.isReady && (
        <>
          <ProfileDetail userData={userData.userData} />
          {data?.flat().map((post, index) => (
            <PostDisplay userData={userData.userData} postData={post} key={post.postid}/>
          ))}
          {!isValidating && <div ref={ref} aria-hidden='true' />}
        </>
      )}
    </div>
  )
}

UserProfile.getLayout = getLayout

export default UserProfile
