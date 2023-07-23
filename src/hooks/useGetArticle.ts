import { useQuery } from 'react-query'

import { articleAPI } from '@/API/articles'

export const useGetArticle = (slug: string) => {
  return useQuery('getAritlce', () => articleAPI.getArticle(slug), {
    enabled: true,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
