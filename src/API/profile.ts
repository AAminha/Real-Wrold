import { ProfileResponse } from '@/types/profile'

import { authClient } from './client'

export const profileAPI = {
  get: async (username: string) => {
    const response = await authClient.get<ProfileResponse>(`/profiles/${username}`)
    return response.data.profile
  },
  follow: async (username: string) => {
    const response = await authClient.post<ProfileResponse>(`profiles/${username}/follow`, null)
    return response.data.profile
  },
  unfollow: async (username: string) => {
    const response = await authClient.delete<ProfileResponse>(`profiles/${username}/follow`)
    return response.data.profile
  },
}
