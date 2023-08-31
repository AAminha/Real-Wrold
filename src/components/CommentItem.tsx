import React from 'react'

import { CommentData } from '@/types/comment'

const CommentItem = ({ slug, comments }: { slug: string | undefined; comments: CommentData[] }) => {
  return (
    <div>
      {comments.map((comment: CommentData) => (
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
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentItem
