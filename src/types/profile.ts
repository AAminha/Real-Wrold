export interface ProfileDto<T> {
  profile: T
}

export interface ProfileResponseData {
  username: string
  bio: string
  image: string
  following: boolean
}

export type ProfileResponse = ProfileDto<ProfileResponseData>
