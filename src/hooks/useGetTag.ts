import { useQuery } from 'react-query'

import { tagsAPI } from '@/API/tag'

export const useGetTags = () => {
  return useQuery(['getTags'], () => tagsAPI.get(), {
    enabled: false,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
