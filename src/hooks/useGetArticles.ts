import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { articleAPI } from '@/API/articles'

export const useGetArticles = ({
  tag,
  author,
  favorited,
  limit,
  page,
}: {
  tag?: string
  author?: string
  favorited?: string
  limit: number
  page: number
}) => {
  const navigate = useNavigate()
  return useQuery(
    ['getAritlces', tag, author, favorited, limit, page],
    () => articleAPI.getArticles({ tag, author, favorited, limit, page }),
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
