import { GetArticleResponse } from '@/types/articles'

import client from './client'

export const articleAPI = {
  get: async () => {
    const response = await client.get<GetArticleResponse>('/articles')
    return response
  },
}
