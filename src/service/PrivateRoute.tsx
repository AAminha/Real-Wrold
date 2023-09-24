import React from 'react'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  // TODO : 로그인 상태라면 로그인 페이지, 회원가입 페이지 접근 불가하도록
  // TODO : 비로그인 상태라면 /settings와 /editor 접근 불가하도록
  // TODO : 로그인이든 비로그인이든 존재하지 않는 path는 홈으로 이동하도록
  return children
}

export default PrivateRoute
