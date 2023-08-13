import {
  FavoriteResponse,
  GetArticleResponse,
  GetArticlesResponse,
  PostArticleRequestData,
  PostArticleResponse,
} from '@/types/articles'

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
    // Auth is optional
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
  getArticle: async (slug: string) => {
    // Auth not required
    const response = await authClient.get<GetArticleResponse>(`/articles/${slug}`)
    return response.data
  },
  post: async (article: PostArticleRequestData) => {
    // Auth is required
    const response = await authClient.post<PostArticleResponse>('/articles', {
      article: article,
    })
    return response.data
  },
  favorite: async (slug: string) => {
    // Auth is required
    const response = await authClient.post<FavoriteResponse>(`/articles/${slug}/favorite`, null)
    return response.data
  },
  unfavorite: async (slug: string) => {
    // Auth is required
    const response = await authClient.delete<FavoriteResponse>(`/articles/${slug}/favorite`)
    return response.data
  },
}
