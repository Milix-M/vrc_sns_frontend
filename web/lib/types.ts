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
  id: string;
  native: string;
  colons: string;
  emotions: string[];
  name: string;
  skin: number | null;
}