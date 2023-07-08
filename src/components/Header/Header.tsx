import React from 'react'

import { useRecoilState } from 'recoil'

import { userState } from '@/states/userState'

import LoginNavbar from './LoginNavbar'
import LogoutNavbar from './LogoutNavbar'

const Header = () => {
  const [currentUser] = useRecoilState(userState)

  return currentUser ? <LoginNavbar /> : <LogoutNavbar />
}

export default Header
