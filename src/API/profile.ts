import { ProfileResponse } from '@/types/profile'

import { authClient } from './client'

export const profileAPI = {
  get: async (username: string) => {
    const response = await authClient.get<ProfileResponse>(`/profiles/${username}`)
    return response.data.profile
  },
}
