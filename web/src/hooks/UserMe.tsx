import useSWR from "swr";
import fetcher from "lib/fetcher";
import { UserDataType, ErrorResponse } from "lib/types"


const userGetMe = () => {
    const { data: userData, error, isValidating: isLoading } = useSWR<UserDataType, ErrorResponse>(
        '/api/users/me', fetcher
    )
    return { userData, isLoading, error}
}

export default userGetMe