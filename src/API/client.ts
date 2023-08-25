import axios from 'axios'

import api from '@/service/TokenService'

const baseURL = 'https://api.realworld.io/api'

export const client = axios.create({
  baseURL: baseURL,
})

export const authClient = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Token ${api.get()}`,
  },
})
