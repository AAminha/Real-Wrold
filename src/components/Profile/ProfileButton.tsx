import React from 'react'

import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { profileAPI } from '@/API/profile'
import { userState } from '@/states/userState'

const ProfileButton = ({
  username,
  following,
  getProfileRefetch,
}: {
  username?: string
  following?: boolean
  getProfileRefetch: () => void
}) => {
  const navigate = useNavigate()
  const currentUser = useRecoilValue(userState)

  const { mutate: postFollowMutate } = useMutation(profileAPI.follow, {
    onSuccess: () => {
      getProfileRefetch()
    },
    onError: () => {
      // TODO : 에러 발생 알리기
    },
  })

  const { mutate: deleteUnfollowMutate } = useMutation(profileAPI.unfollow, {
    onSuccess: () => {
      getProfileRefetch()
    },
    onError: () => {
      // TODO : 에러 발생 알리기
    },
  })

  const handleFollow = () => {
    if (following) return postFollowMutate
    return deleteUnfollowMutate
  }

  if (currentUser?.username === username) {
    return (
      <button
        className="btn btn-sm btn-outline-secondary action-btn"
        onClick={() => navigate('/settings')}
      >
        <i className="ion-gear-a"></i>
        &nbsp; Edit Profile Settings
      </button>
    )
  } else {
    return (
      <button
        className="btn btn-sm btn-outline-secondary action-btn"
        onClick={handleFollow}
      >
        <i className="ion-plus-round"></i>
        &nbsp;&nbsp;{`${following ? 'Unfollow' : 'Follow'} ${username}`}
      </button>
    )
  }
}

export default ProfileButton
