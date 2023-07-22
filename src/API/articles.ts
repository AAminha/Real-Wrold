import { GetArticlesResponse } from '@/types/articles'

import { client } from './client'

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
    const response = await client.get<GetArticlesResponse>('/articles', {
      params: {
        tag: tag,
        author: author,
        favorited: favorited,
        offset: offset,
        limit: limit,
      },
    })
    return response
  },
}
