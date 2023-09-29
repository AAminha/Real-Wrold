import { AuthorData } from './user'

export interface ArticlesDto<T> {
  articles: T[]
  articlesCount: number
}

export interface ArticleDto<T> {
  article: T
}

export interface PostArticleRequestData {
  title: string
  description: string
  body: string
  tagList: string[]
}

export interface PutArticleRequestData {
  title: string
  description: string
  body: string
  tagList: string[]
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
  author: AuthorData
}

export type PostArticleRequest = ArticleDto<PostArticleRequestData>
export type PutArticleRequest = ArticleDto<PutArticleRequestData>
export type GetArticlesResponse = ArticlesDto<ArticleData>
export type FavoriteResponse = ArticleDto<ArticleData>
export type GetArticleResponse = ArticleDto<ArticleData>
export type PostArticleResponse = ArticleDto<ArticleData>
export type PutArticleResponse = ArticleDto<ArticleData>
