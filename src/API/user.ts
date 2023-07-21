import {
  GetUserResponse,
  PostLoginRequest,
  PostLoginResponse,
  PostRegisterRequest,
  PostRegisterResponse,
} from '@/types/auth'

import { client, authClient } from './client'

export const userAPI = {
  login: async (loginData: PostLoginRequest) => {
    const response = await client.post<PostLoginResponse>('/users/login', loginData)
    console.log(response)
    return response.data
  },
  register: async (registerData: PostRegisterRequest) => {
    const response = await client.post<PostRegisterResponse>('/users', registerData)
    return response.data
  },
  get: async () => {
    const response = await authClient.get<GetUserResponse>('/user')
    return response
  },
}
