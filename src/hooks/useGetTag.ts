import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { tagsAPI } from '@/API/tag'

export const useGetTags = () => {
  const navigate = useNavigate()
  return useQuery(['getTags'], () => tagsAPI.get(), {
    enabled: false,
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
