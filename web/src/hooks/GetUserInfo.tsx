import useSWR from "swr";
import fetcher from "lib/fetcher";
import { UserDataType, ErrorResponse } from "lib/types"


const getUserInfo = (userid: string) => {
    const { data: userData, error, isValidating: isLoading } = useSWR<UserDataType, ErrorResponse>(
        `/api/users/${userid}/info`, fetcher
    )
    return { userData, isLoading, error}
}

export default getUserInfo