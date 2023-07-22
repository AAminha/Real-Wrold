import { useQuery } from 'react-query'

import { articleAPI } from '@/API/articles'

export const useGetArticles = ({
  tag,
  author,
  favorited,
  offset,
  limit,
}: {
  tag?: string
  author?: string
  favorited?: string
  offset?: number
  limit?: number
}) => {
  return useQuery(
    ['getAritlces', tag, author, favorited, offset, limit],
    () => articleAPI.getArticles({ tag, author, favorited, offset, limit }),
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
