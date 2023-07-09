import { useQuery } from 'react-query'

import { articleAPI } from '@/API/articles'

export const useGetArticles = () => {
  return useQuery('getAritlces', articleAPI.get, {
    enabled: true,
    staleTime: 1000,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
