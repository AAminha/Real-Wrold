import { GetUserResponse, PostLoginRequest, PostLoginResponse } from '@/types/auth'

import { client, authClient } from './client'

export const userAPI = {
  login: async (userData: PostLoginRequest) => {
    const response = await client.post<PostLoginResponse>('/users/login', {
      user: userData,
    })
    return response
  },

  gets: async () => {
    const response = await authClient.get<GetUserResponse>('/user')
    return response
  },
}
