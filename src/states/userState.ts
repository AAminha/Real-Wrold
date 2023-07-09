import { atom } from 'recoil'

import { UserDataType } from '@/types/auth'

import persistAtom from './persistAtom'

export const userState = atom<UserDataType | undefined>({
  key: 'userState',
  default: undefined,
  effects: [persistAtom],
})
