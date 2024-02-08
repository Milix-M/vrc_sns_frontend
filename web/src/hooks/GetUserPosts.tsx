import useSWR from "swr";
import fetcher from "lib/fetcher";
import { ErrorResponse, PostType } from "lib/types"


const getUserPosts = (display_id: string, limit: number) => {
    const { data: userPosts, error, isValidating: isLoading } = useSWR<PostType[], ErrorResponse>(
        `/api/users/${display_id}/posts?` + new URLSearchParams({ display_id: display_id, limit: limit.toString()}).toString(),
        fetcher
    )
    return { userPosts: userPosts, isLoading, error}
}

export default getUserPosts