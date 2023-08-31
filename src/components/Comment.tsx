import React, { ChangeEvent, useEffect, useState } from 'react'

import { useMutation } from 'react-query'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { commentAPI } from '@/API/comment'
import { useGetComment } from '@/hooks/useGetComment'
import { userState } from '@/states/userState'
import { CommentData } from '@/types/comment'

import CommentItem from './CommentItem'

const Comment = () => {
  const { slug } = useParams()
  const [comment, setComment] = useState<string>('')
  const [commentList, setCommentList] = useState<CommentData[]>([])
  const [currentUser] = useRecoilState(userState)
  const { data: comments } = useGetComment(slug ? slug : '')

  useEffect(() => {
    comments && setCommentList(comments.comments)
  }, [comments])

  const { mutate: postCommentMutate } = useMutation(commentAPI.post, {
    onSuccess: (data) => {
      console.log(data)
      setCommentList((commentList) => [...commentList])
    },
  })

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setComment(value)
  }

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form
          className="card comment-form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="card-block">
            <textarea
              className="form-control"
              placeholder="Write a comment..."
              rows={3}
              name="comment"
              value={comment}
              onChange={handleChangeTextarea}
            ></textarea>
          </div>
          <div className="card-footer">
            <img
              src={currentUser?.image}
              className="comment-author-img"
            />
            <button
              className="btn btn-sm btn-primary"
              onClick={() => {
                slug && postCommentMutate({ slug, comment })
              }}
            >
              Post Comment
            </button>
          </div>
        </form>

        <CommentItem
          slug={slug}
          comments={commentList}
        />
      </div>
    </div>
  )
}

export default Comment
