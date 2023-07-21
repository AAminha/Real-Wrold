import { GetUserResponse, PostLoginRequest, PostLoginResponse } from '@/types/auth'

import { client, authClient } from './client'

export const userAPI = {
  login: async (loginData: PostLoginRequest) => {
    const response = await client.post<PostLoginResponse>('/users/login', {
      user: loginData,
    })
    console.log(response)
    return response.data
  },

  gets: async () => {
    const response = await authClient.get<GetUserResponse>('/user')
    return response
  },
}
