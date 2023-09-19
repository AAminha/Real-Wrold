import { useQuery } from 'react-query'

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
  return useQuery(
    ['getFollowAritlces', tag, author, favorited, page],
    () => articleAPI.getFollowArticles({ page }),
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
