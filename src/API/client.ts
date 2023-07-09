import axios from 'axios'

import api from '@/service/TokenService'

const baseURL = 'https://api.realworld.io/api'

const client = axios.create({
  baseURL: baseURL,
  headers: api.headers,
})

export default client
