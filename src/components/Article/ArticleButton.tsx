import React from 'react'

import { useRecoilState } from 'recoil'

import { userState } from '@/states/userState'
import { ArticleData } from '@/types/articles'

const ArticleButton = ({ article }: { article: ArticleData }) => {
  // TODO: 팔로우 버튼 기능 구현
  // TODO: 게시글 편집 및 삭제 버튼 기능 구현
  const [currentUser] = useRecoilState(userState)
  if (currentUser?.username === article.author.username)
    return (
      <>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round"></i>
          &nbsp; Follow {article.author.username}
        </button>
        &nbsp;
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart"></i>
          &nbsp; Favorite Article <span className="counter">({article.favoritesCount})</span>
        </button>
      </>
    )
  else
    return (
      <>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round"></i>
          &nbsp; Follow Eric Simons
        </button>
        &nbsp;
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart"></i>
          &nbsp; Favorite Article <span className="counter">(29)</span>
        </button>
      </>
    )
}

export default ArticleButton
