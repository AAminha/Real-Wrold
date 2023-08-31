import { useQuery } from 'react-query'

import { commentAPI } from '@/API/comment'

export const useGetComment = (slug: string) => {
  return useQuery('getComment', () => commentAPI.get(slug), {
    enabled: true,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
