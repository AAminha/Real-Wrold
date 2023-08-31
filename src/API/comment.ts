import { CommentResponse } from '@/types/comment'

import { authClient, client } from './client'

export const commentAPI = {
  get: async (slug: string) => {
    // Auth is optional
    const response = await client.get<CommentResponse>(`articles/${slug}/comments`)
    return response.data
  },
  post: async (slug: string, comment: string) => {
    // Auth is requried
    const response = await authClient.post<CommentResponse>(`articles/${slug}/comments`, {
      comments: {
        body: comment,
      },
    })
    return response.data
  },
  delete: async (slug: string, id: number) => {
    // Auth is required
    const response = await authClient.delete(`articles/${slug}/comments/${id}`)
    return response.data
  },
}
