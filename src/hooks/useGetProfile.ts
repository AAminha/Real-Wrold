import { useQuery } from 'react-query'

import { profileAPI } from '@/API/profile'

export const useGetProfile = (username: string) => {
  return useQuery(['getProfile', username], () => profileAPI.get(username), {
    // enabled: true,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
