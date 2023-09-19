/* import {
  FavoriteResponse,
  GetArticleResponse,
  GetArticlesResponse,
  PostArticleRequestData,
  PostArticleResponse,
  PutArticleRequestData,
  PutArticleResponse,
} from '@/types/articles'

import { authClient } from './client'

export const articleAPI = {
  getFollowArticles: async ({ offset, limit }: { offset?: number; limit?: number }) => {
    // Auth is required
    const response = await authClient.get<GetArticlesResponse>('/articles/feed', {
      params: {
        offset: offset,
        limit: limit,
      },
    })
    return response.data
  },
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
  edit: async (article: PutArticleRequestData) => {
    // Auth is required
    const response = await authClient.post<PutArticleResponse>('/articles', {
      article: article,
    })
    return response.data
  },
  delete: async (slug: string) => {
    // Auth is required
    const response = await authClient.delete(`articles/${slug}`)
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
} */

import { MAIN_LIMIT } from '@/constants'
import {
  FavoriteResponse,
  GetArticleResponse,
  GetArticlesResponse,
  PostArticleRequestData,
  PostArticleResponse,
  PutArticleRequestData,
  PutArticleResponse,
} from '@/types/articles'

import { authClient } from './client'

export const articleAPI = {
  getFollowArticles: async ({ page }: { page: number }) => {
    // Auth is required
    const response = await authClient.get<GetArticlesResponse>('/articles/feed', {
      params: {
        offset: MAIN_LIMIT * (page - 1),
        limit: MAIN_LIMIT,
      },
    })
    return response.data
  },
  getArticles: async ({
    tag,
    author,
    favorited,
    limit,
    page,
  }: {
    tag?: string
    author?: string
    favorited?: string
    limit: number
    page: number
  }) => {
    // Auth is optional
    const response = await authClient.get<GetArticlesResponse>('/articles', {
      params: {
        tag: tag,
        author: author,
        favorited: favorited,
        offset: limit * (page - 1),
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
  edit: async (article: PutArticleRequestData) => {
    // Auth is required
    const response = await authClient.post<PutArticleResponse>('/articles', {
      article: article,
    })
    return response.data
  },
  delete: async (slug: string) => {
    // Auth is required
    const response = await authClient.delete(`articles/${slug}`)
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
