export interface ErrorResponse {
  detail: string
}

export interface UserDataType {
  id?: number
  display_id?: string | null
  username?: string
  icon?: string
  header?: string
  email?: string
  profile?: string
  session_cert?: string
}

export interface EmojiType {
  id: string
  native: string
  colons: string
  emotions: string[]
  name: string
  skin: number | null
}

export interface PostType {
  postid: number
  content: string
  created_at: Date
  user: UserDataType | null
  user_id: number | null
  favorite_count: number
  repost_count: number 
}
