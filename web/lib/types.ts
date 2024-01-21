export interface ErrorResponse {
  detail: string
}

export interface UserDataType {
  id?: number
  userid?: string | null
  username?: string
  email?: string
  session_cert?: string
}
