import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { profileAPI } from '@/API/profile'

export const useGetProfile = (username: string) => {
  const navigate = useNavigate()
  return useQuery(['getProfile', username], () => profileAPI.get(username), {
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
