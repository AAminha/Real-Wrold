import { UserDataType } from './auth'

export type ArticleDataType = {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: UserDataType
}

export type GetArticleResponse = {
  articles: ArticleDataType[]
  aritlcesCount: number
}
