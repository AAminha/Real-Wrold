import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'real - world - recoilState',
  storage: sessionStorage,
})

export default persistAtom
