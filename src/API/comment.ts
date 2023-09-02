import { CommentGetResponse, CommentPostResponse } from '@/types/comment'

import { authClient } from './client'

export const commentAPI = {
  get: async (slug: string) => {
    // Auth is optional
    const response = await authClient.get<CommentGetResponse>(`articles/${slug}/comments`)
    return response.data
  },
  post: async ({ slug, comment }: { slug: string; comment: string }) => {
    // Auth is requried
    const response = await authClient.post<CommentPostResponse>(`articles/${slug}/comments`, {
      comment: {
        body: comment,
      },
    })
    return response.data
  },
  delete: async ({ slug, id }: { slug: string; id: number }) => {
    // Auth is required
    const response = await authClient.delete(`articles/${slug}/comments/${id}`)
    return { data: response.data, id: id }
  },
}
