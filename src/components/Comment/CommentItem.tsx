import React from 'react'

import { useMutation } from 'react-query'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { commentAPI } from '@/API/comment'
import { userState } from '@/states/userState'
import { CommentData } from '@/types/comment'

const CommentItem = ({
  commentList,
  setCommentList,
}: {
  commentList: CommentData[]
  setCommentList: (newCommentList: CommentData[]) => void
}) => {
  const { slug } = useParams()
  const [currentUser] = useRecoilState(userState)

  const { mutate: deleteCommentMutate } = useMutation(commentAPI.delete, {
    onSuccess: ({ id }) => {
      setCommentList(commentList.filter((comment) => comment.id !== id))
    },
  })

  return (
    <div>
      {commentList.map((comment: CommentData) => (
        <div
          className="card"
          key={comment.id}
        >
          <div className="card-block">
            <p className="card-text">{comment.body}</p>
          </div>
          <div className="card-footer">
            <a
              href={`/@${comment.author.username}`}
              className="comment-author"
            >
              <img
                src={comment.author.image}
                className="comment-author-img"
              />
            </a>
            &nbsp;
            <a
              href={`/@${comment.author.username}`}
              className="comment-author"
            >
              {comment.author.username}
            </a>
            <span className="date-posted">{comment.createdAt}</span>
            {currentUser?.username === comment.author.username && (
              <span className="mod-options">
                <i
                  className="ion-trash-a"
                  onClick={() => {
                    deleteCommentMutate({ slug: slug ? slug : '', id: comment.id })
                  }}
                ></i>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentItem
