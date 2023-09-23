import {
  GetUserResponse,
  PostLoginRequest,
  PostLoginResponse,
  PostRegisterRequest,
  PostRegisterResponse,
  PutUserRequest,
  PutUserResponse,
} from '@/types/user'

import { client, authClient } from './client'

export const userAPI = {
  login: async (loginData: PostLoginRequest) => {
    const response = await client.post<PostLoginResponse>('/users/login', loginData)
    return response.data
  },
  register: async (registerData: PostRegisterRequest) => {
    const response = await client.post<PostRegisterResponse>('/users', registerData)
    return response.data
  },
  get: async () => {
    const response = await authClient.get<GetUserResponse>('/user')
    return response.data
  },
  update: async (newUserData: PutUserRequest) => {
    const response = await authClient.put<PutUserResponse>('/user', newUserData)
    return response.data
  },
}
