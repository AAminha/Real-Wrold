import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { userState } from '@/states/userState'
import { ArticleData } from '@/types/articles'

const ArticleButton = ({ article }: { article: ArticleData }) => {
  // TODO: 팔로우 버튼 기능 구현
  // TODO: 게시글 편집 및 삭제 버튼 기능 구현
  const navigate = useNavigate()
  const [currentUser] = useRecoilState(userState)
  // 게시글 작성자가 본인일 때, Edit 및 Delete 버튼
  if (currentUser && currentUser.username === article.author.username)
    return (
      <>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => {
            navigate(`/editor/${article.slug}`)
          }}
        >
          <i className="ion-edit"></i>
          &nbsp; Edit Article
        </button>
        &nbsp;
        <button className="btn btn-outline-danger btn-sm">
          <i className="ion-trash-a"></i>
          &nbsp; Delete Article
        </button>
      </>
    )
  // 게시글 작성자가 타인일 때, Follow 버튼
  else
    return (
      <>
        <button
          className={`btn btn-sm ${
            article.author.following
              ? 'action-btn ng-binding btn-secondary'
              : 'btn-outline-secondary'
          }`}
        >
          <i className="ion-plus-round"></i>
          &nbsp; {article.author.following ? 'Unfollow' : 'Follow'} {article.author.username}
        </button>
        &nbsp;
        <button
          className={`btn btn-sm ${article.favorited ? 'btn-primary' : 'btn-outline-primary'}`}
        >
          <i className="ion-heart"></i>
          &nbsp; {article.favorited ? 'Unfavorite' : 'Favorite'} Article{' '}
          <span className="counter">({article.favoritesCount})</span>
        </button>
      </>
    )
}

export default ArticleButton
