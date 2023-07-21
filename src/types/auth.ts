export interface UserDataType {
  email: string
  username: string
  bio: string
  image: string
}

export interface PostLoginRequest {
  email: string
  password: string
}

export interface PostLoginResponse extends UserDataType {
  token: string
}

export interface GetUserResponse extends UserDataType {
  token: string
}
