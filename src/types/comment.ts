import { ProfileResponseData } from './profile'

export interface CommentsDto<T> {
  comments: T[]
}

export interface CommentDto<T> {
  comment: T
}

export interface CommentData {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: ProfileResponseData
}

export type CommentGetResponse = CommentsDto<CommentData>
export type CommentPostResponse = CommentDto<CommentData>
