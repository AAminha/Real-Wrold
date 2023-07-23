import { UserData } from './user'

export interface ArticlesDto<T> {
  articles: T[]
  articlesCount: number
}

export interface ArticleDto<T> {
  article: T
}

export interface ArticleData {
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

export type GetArticlesResponse = ArticlesDto<ArticleData>
export type FavoriteResponse = ArticleDto<ArticleData>
export type GetArticleResponse = ArticleDto<ArticleData>
