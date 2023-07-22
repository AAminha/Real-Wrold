import React from 'react'

import { useRecoilValue } from 'recoil'

import { userState } from '@/states/userState'

const ProfileButton = ({ username, following }: { username?: string; following?: boolean }) => {
  const currentUser = useRecoilValue(userState)
  if (currentUser?.username === username) {
    return (
      <button className="btn btn-sm btn-outline-secondary action-btn">
        <i className="ion-gear-a"></i>
        &nbsp; Edit Profile Settings
      </button>
    )
  } else {
    return following ? (
      <button className="btn btn-sm btn-outline-secondary action-btn">
        <i className="ion-plus-round"></i>
        &nbsp;&nbsp;{`Unfollow ${username}`}
      </button>
    ) : (
      <button className="btn btn-sm btn-outline-secondary action-btn">
        <i className="ion-plus-round"></i>
        &nbsp;&nbsp;{`Follow ${username}`}
      </button>
    )
  }
}

export default ProfileButton
