import { atom } from 'recoil'

import { UserInfoType } from '@/types/auth'

import persistAtom from './persistAtom'

export const userState = atom<UserInfoType | undefined>({
  key: 'userState',
  default: undefined,
  effects: [persistAtom],
})
