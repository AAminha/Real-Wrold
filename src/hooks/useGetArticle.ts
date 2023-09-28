import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { articleAPI } from '@/API/articles'

export const useGetArticle = (slug: string) => {
  const navigate = useNavigate()
  return useQuery('getAritlce', () => articleAPI.getArticle(slug), {
    enabled: true,
    retry: 0,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      navigate('/')
      console.log(err)
    },
  })
}
