export type GetUserInfoResponse = {
  email: string
  token: string
  username: string
  bio: string
  image: string
}

export type UserInfoType = {
  email: string
  username: string
  bio: string
  image: string
}

export type PutUserInfoRequest = UserInfoType & {
  password: string
}
