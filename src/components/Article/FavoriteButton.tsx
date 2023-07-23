import React, { useState } from 'react'

import { useMutation } from 'react-query'

import { articleAPI } from '@/API/articles'
import { ArticleData } from '@/types/articles'

const FavoriteButton = ({ article }: { article: ArticleData }) => {
  const [favorited, setFavorited] = useState<boolean>(article.favorited)
  const [favoritesCount, setFavoritesCount] = useState<number>(article.favoritesCount)

  const { mutate: postFavoriteMutate } = useMutation(articleAPI.favorite, {
    onSuccess: (data) => {
      setFavorited(data.article.favorited)
      setFavoritesCount(data.article.favoritesCount)
    },
  })
  const { mutate: deleteFavoriteMutate } = useMutation(articleAPI.unfavorite, {
    onSuccess: (data) => {
      setFavorited(data.article.favorited)
      setFavoritesCount(data.article.favoritesCount)
    },
  })

  return (
    <button
      className={`btn btn-sm pull-xs-right ${favorited ? 'btn-primary' : 'btn-outline-primary'}`}
      onClick={() =>
        favorited ? deleteFavoriteMutate(article.slug) : postFavoriteMutate(article.slug)
      }
    >
      <i className="ion-heart"></i>&nbsp;{favoritesCount}
    </button>
  )
}

export default FavoriteButton
