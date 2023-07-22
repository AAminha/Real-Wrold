import { Cookies } from 'react-cookie'

class TokenService {
  cookie = new Cookies()

  set(token: string) {
    this.cookie.set('token', token, { path: '/' })
  }

  get() {
    return this.cookie.get('token')
  }

  logout() {
    this.cookie.remove('token')
  }

  headers() {
    return {
      Authorization: `Token ${this.get()}`,
    }
  }
}

const api = new TokenService()

export default api
