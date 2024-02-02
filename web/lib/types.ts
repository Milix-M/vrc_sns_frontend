export interface ErrorResponse {
  detail: string
}

export interface UserDataType {
  id?: number
  userid?: string | null
  username?: string
  icon?: string | null
  email?: string
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