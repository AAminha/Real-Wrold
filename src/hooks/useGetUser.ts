import { useQuery } from 'react-query'

import { userAPI } from '@/API/user'

export const useGetUser = () => {
  return useQuery('getUser', userAPI.get, {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
