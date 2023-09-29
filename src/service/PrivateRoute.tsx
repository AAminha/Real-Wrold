import React from 'react'

import { Navigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { userState } from '@/states/userState'

export const PrivateRouteLogin = ({ children }: { children: JSX.Element }) => {
  // 로그인 상태라면 로그인 페이지, 회원가입 페이지 접근 불가하도록
  const [currentUser] = useRecoilState(userState)
  if (currentUser !== undefined) {
    return (
      <Navigate
        to="/"
        replace
      />
    )
  }

  return children
}

export const PrivateRouteLogout = ({ children }: { children: JSX.Element }) => {
  // 비로그인 상태라면 /settings와 /editor 접근 불가하도록
  const [currentUser] = useRecoilState(userState)
  if (currentUser === undefined) {
    return (
      <Navigate
        to="/"
        replace
      />
    )
  }

  return children
}

export const PrivateRouteUser = ({ children }: { children: JSX.Element }) => {
  // 이상한 path 입력 시 path="/:username/*"로 가는 버그를 막기 위함
  const { username: usernameParams } = useParams()
  if (!usernameParams?.includes('@')) {
    return (
      <Navigate
        to="/"
        replace
      />
    )
  }

  return children
}
