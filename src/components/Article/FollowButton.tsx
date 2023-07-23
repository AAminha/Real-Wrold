import React from 'react'

const FollowButton = () => {
  // TODO: 팔로우 버튼 기능 구현
  return (
    <div>
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp; Follow Eric Simons
      </button>
      &nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>
        &nbsp; Favorite Article <span className="counter">(29)</span>
      </button>
    </div>
  )
}

export default FollowButton
