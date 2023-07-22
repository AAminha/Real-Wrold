import { GetArticlesResponse } from '@/types/articles'

import { authClient } from './client'

export const articleAPI = {
  getArticles: async ({
    tag,
    author,
    favorited,
    offset,
    limit,
  }: {
    tag?: string
    author?: string
    favorited?: string
    offset?: number
    limit?: number
  }) => {
    const response = await authClient.get<GetArticlesResponse>('/articles', {
      params: {
        tag: tag,
        author: author,
        favorited: favorited,
        offset: offset,
        limit: limit,
      },
    })
    return response.data
  },
}
