import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { commentAPI } from '@/API/comment'

export const useGetComment = (slug: string) => {
  const navigate = useNavigate()
  return useQuery('getComment', () => commentAPI.get(slug), {
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
