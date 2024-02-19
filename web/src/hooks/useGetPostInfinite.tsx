import fetcher from 'lib/fetcher'
import { useCallback, useState } from 'react'
import useSWRInfinite from 'swr/infinite'
import { PostType } from 'lib/types'

const useGetPostInfinite = (url: string, limit: number) => {
  const [isReachingEnd, setIsReachingEnd] = useState(false)

  const getKey = (pageIndex: number, previousPageData: PostType[][]) => {
    if (pageIndex === 0) return `${url}?limit=${limit}`
    if (previousPageData.flat().at(-1)?.postid === undefined) {
      setIsReachingEnd(true)
      return null
    }
    return `${url}?limit=${limit}&untilid=${previousPageData.flat().at(-1)?.postid}`
  }

  const SWRInfiniteResponse = useSWRInfinite<PostType[]>(getKey, fetcher)

  const { data, size, setSize } = SWRInfiniteResponse

  const fetchMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

  return {
    ...SWRInfiniteResponse,
    data: data?.flat(),
    isReachingEnd,
    fetchMore
  }
}

export default useGetPostInfinite