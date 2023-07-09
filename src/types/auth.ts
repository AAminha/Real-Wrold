export type UserDataType = {
  email: string
  username: string
  bio: string
  image: string
}

export type PostLoginRequest = {
  email: string
  password: string
}

export type PostLoginResponse = UserDataType & {
  token: string
}

export type GetLoginResponse = UserDataType & {
  token: string
}
