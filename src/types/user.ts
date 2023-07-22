export interface AuthDto<T> {
  user: T
}
export interface UserData {
  email: string
  username: string
  bio: string
  image: string
}

export interface PostLoginRequestData {
  email: string
  password: string
}

export interface PostRegisterRequestData {
  username: string
  email: string
  password: string
}

export interface PostLoginResponseData extends UserData {
  token: string
}

export interface PostRegisterResponseData extends UserData {
  token: string
}

export interface GetUserResponseData extends UserData {
  token: string
}

export interface PutUserRequestData extends UserData {
  password: string
}

export interface PutUserResponseData extends UserData {
  token: string
}

export interface ErrorData {
  errors: {
    [key: string]: string[]
  }
}

export type PostLoginRequest = AuthDto<PostLoginRequestData>
export type PostRegisterRequest = AuthDto<PostRegisterRequestData>
export type PostLoginResponse = AuthDto<PostLoginResponseData>
export type PostRegisterResponse = AuthDto<PostRegisterResponseData>
export type GetUserResponse = AuthDto<GetUserResponseData>
export type PutUserRequest = AuthDto<PutUserRequestData>
export type PutUserResponse = AuthDto<PutUserResponseData>
