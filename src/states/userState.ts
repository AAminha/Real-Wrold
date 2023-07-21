import { atom } from 'recoil'

import { UserData } from '@/types/user'

import persistAtom from './persistAtom'

export const userState = atom<UserData | undefined>({
  key: 'userState',
  default: undefined,
  effects: [persistAtom],
})
