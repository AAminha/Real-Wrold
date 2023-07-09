import { useMutation } from 'react-query'

import { userAPI } from '@/API/user'

export const usePostLogin = () => {
  return useMutation(userAPI.login, {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
