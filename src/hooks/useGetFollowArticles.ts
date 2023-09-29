import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { articleAPI } from '@/API/articles'

export const useGetFollowArticles = ({
  tag,
  author,
  favorited,
  page,
}: {
  tag?: string
  author?: string
  favorited?: string
  page: number
}) => {
  const navigate = useNavigate()
  return useQuery(
    ['getFollowAritlces', tag, author, favorited, page],
    () => articleAPI.getFollowArticles({ page }),
    {
      enabled: false,
      retry: 0,
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (err) => {
        navigate('/')
        console.log(err)
      },
    }
  )
}
