import React, { ChangeEvent, useState } from 'react'

import { useRecoilState } from 'recoil'

import { userState } from '@/states/userState'

import CommentItem from './CommentItem'

const Comment = () => {
  const [comment, setComment] = useState<string>('')
  const [currentUser] = useRecoilState(userState)

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setComment(value)
  }

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form className="card comment-form">
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
            <button className="btn btn-sm btn-primary">Post Comment</button>
          </div>
        </form>

        <CommentItem />
      </div>
    </div>
  )
}

export default Comment
