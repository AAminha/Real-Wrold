import { useQuery } from 'react-query'

import { articleAPI } from '@/API/articles'

export const useGetFollowArticles = ({
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
    ['getFollowAritlces', tag, author, favorited, offset, limit],
    () => articleAPI.getFollowArticles({ offset, limit }),
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
