import { FavoriteResponse, GetArticlesResponse } from '@/types/articles'

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
  favorite: async (slug: string) => {
    const response = await authClient.post<FavoriteResponse>(`/articles/${slug}/favorite`, null)
    return response.data
  },
  unfavorite: async (slug: string) => {
    const response = await authClient.delete<FavoriteResponse>(`/articles/${slug}/favorite`)
    return response.data
  },
}
