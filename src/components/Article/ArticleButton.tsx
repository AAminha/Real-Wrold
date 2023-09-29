import React from 'react'

import { QueryObserverResult, useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { articleAPI } from '@/API/articles'
import { profileAPI } from '@/API/profile'
import { userState } from '@/states/userState'
import { ArticleData, GetArticleResponse } from '@/types/articles'

const ArticleButton = ({
  article,
  articleRefetch,
}: {
  article: ArticleData
  articleRefetch: () => Promise<QueryObserverResult<GetArticleResponse, unknown>>
}) => {
  const navigate = useNavigate()
  const [currentUser] = useRecoilState(userState)

  // 게시글 삭제 기능
  const { mutate: deleteArticleMutate } = useMutation(articleAPI.delete, {
    onSuccess: () => {
      navigate('/')
    },
  })

  // 팔로우 기능
  const { mutate: postFollowMutate } = useMutation(profileAPI.follow, {
    onSuccess: () => {
      articleRefetch()
    },
  })

  // 언팔로우 기능
  const { mutate: deleteFollowMutate } = useMutation(profileAPI.unfollow, {
    onSuccess: () => {
      articleRefetch()
    },
  })

  // 좋아요 기능
  const { mutate: postFavoriteMutate } = useMutation(articleAPI.favorite, {
    onSuccess: () => {
      articleRefetch()
    },
  })

  // 좋아요 취소 기능
  const { mutate: deleteFavoriteMutate } = useMutation(articleAPI.unfavorite, {
    onSuccess: () => {
      articleRefetch()
    },
  })

  const handleFollow = () => {
    if (article.author.following) {
      deleteFollowMutate(article.author.username)
    } else {
      postFollowMutate(article.author.username)
    }
  }

  const handleFavorite = () => {
    if (article.favorited) {
      deleteFavoriteMutate(article.slug)
    } else {
      postFavoriteMutate(article.slug)
    }
  }

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
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => {
            deleteArticleMutate(article.slug)
          }}
        >
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
          onClick={() => {
            currentUser ? handleFollow() : navigate('/register')
          }}
        >
          <i className="ion-plus-round"></i>
          &nbsp; {article.author.following ? 'Unfollow' : 'Follow'} {article.author.username}
        </button>
        &nbsp;
        <button
          className={`btn btn-sm ${article.favorited ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => {
            currentUser ? handleFavorite() : navigate('/register')
          }}
        >
          <i className="ion-heart"></i>
          &nbsp; {article.favorited ? 'Unfavorite' : 'Favorite'} Article{' '}
          <span className="counter">({article.favoritesCount})</span>
        </button>
      </>
    )
}

export default ArticleButton
