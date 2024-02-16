import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import { UserDataType, PostType, ErrorResponse } from 'lib/types'

export const useUserInfo = (display_id: string) => {
  const {
    data: userData,
    error,
    isValidating: isLoading
  } = useSWR<UserDataType, ErrorResponse>(
    display_id ?
    `/api/users/${display_id}/info` : null,
    fetcher
  )
  return { userData, isLoading, error }
}

export const useUserPosts = (display_id: string, limit: number) => {
  const {
    data: userPosts,
    error,
    isValidating: isLoading
  } = useSWR<PostType[], ErrorResponse>(
    display_id ?
    `/api/users/${display_id}/posts?` +
      new URLSearchParams({
        limit: limit.toString()
      }).toString() : null,
    fetcher
  )
  return { userPosts: userPosts, isLoading, error }
}
