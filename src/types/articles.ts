import { UserData } from './auth'

export interface ArticleDataType {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: UserData
}

export interface GetArticleResponse {
  articles: ArticleDataType[]
  aritlcesCount: number
}
