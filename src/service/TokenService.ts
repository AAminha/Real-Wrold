import { AxiosRequestConfig } from 'axios'
import { Cookies } from 'react-cookie'

class TokenService {
  cookie = new Cookies()

  set(token: string) {
    this.cookie.set('realworld_token', token, { path: '/' })
  }

  get() {
    return this.cookie.get('realworld_token')
  }

  logout() {
    this.cookie.remove('realworld_token')
  }

  headers() {
    if (this.get() === undefined) return null
    return {
      Authorization: `Token ${this.get()}`,
    } as AxiosRequestConfig<any>
  }
}

const api = new TokenService()

export default api
