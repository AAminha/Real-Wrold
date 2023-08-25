import { Cookies } from 'react-cookie'

class TokenService {
  cookie = new Cookies()

  set(token: string) {
    console.log('tokenService set')
    this.cookie.set('realworld_token', token, { path: '/' })
  }

  get() {
    console.log('tokenService get')
    return this.cookie.get('realworld_token')
  }

  logout() {
    console.log('tokenService logout')
    this.cookie.remove('realworld_token')
  }
}

const api = new TokenService()

export default api
