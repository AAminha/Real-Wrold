import { useQuery } from 'react-query'

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
  return useQuery(
    ['getAritlces', tag, author, favorited, limit, page],
    () => articleAPI.getArticles({ tag, author, favorited, limit, page }),
    {
      enabled: false,
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (err) => {
        console.log(err)
      },
    }
  )
}
