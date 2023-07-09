import { GetLoginResponse, PostLoginRequest, PostLoginResponse } from '@/types/auth'

import client from './client'

export const userAPI = {
  login: async (userData: PostLoginRequest) => {
    const response = await client.post<PostLoginResponse>('/users/login', {
      user: userData,
    })
    return response
  },
  get: async () => {
    const response = await client.get<GetLoginResponse>('/user')
    return response
  },
}
