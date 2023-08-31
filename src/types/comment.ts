import { ProfileResponseData } from './profile'

export interface CommentDto<T> {
  comments: T[]
}

export interface CommentData {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: ProfileResponseData
}

export type CommentResponse = CommentDto<CommentData>
