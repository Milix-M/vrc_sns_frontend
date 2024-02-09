import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import { UserDataType, PostType, ErrorResponse } from 'lib/types'

export const useUserInfo = (display_id: string) => {
  const {
    data: userData,
    error,
    isValidating: isLoading
  } = useSWR<UserDataType, ErrorResponse>(
    `/api/users/${display_id}/info`,
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
    `/api/users/${display_id}/posts?` +
      new URLSearchParams({
        display_id: display_id,
        limit: limit.toString()
      }).toString(),
    fetcher
  )
  return { userPosts: userPosts, isLoading, error }
}
