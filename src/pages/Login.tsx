import React, { ChangeEvent, useState } from 'react'

import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { userAPI } from '@/API/user'
import api from '@/service/TokenService'
import { userState } from '@/states/userState'
import { ErrorData, PostLoginRequestData } from '@/types/auth'

const Login = () => {
  const navigate = useNavigate()
  const [, setCurrentUser] = useRecoilState(userState)
  const [loginData, setLoginData] = useState<PostLoginRequestData>({
    email: '',
    password: '',
  })
  const [error, setError] = useState<string[]>([])
  const { mutate: postLoginMutate } = useMutation(userAPI.login, {
    onSuccess: (data) => {
      const response = data.user
      api.set(response.token)
      setCurrentUser({
        email: response.email,
        username: response.username,
        bio: response.bio,
        image: response.image,
      })
      navigate('/')
    },
    onError: (err: AxiosError) => {
      console.log(err.response)
      if (err.response?.request.status === 403) {
        const errors = err.response.data as ErrorData
        console.log(errors.errors)
        setError(Object.entries(errors.errors).map(([key, value]) => `${key} ${value}`))
      }
    },
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    postLoginMutate({ user: loginData })
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            <ul className="error-messages">
              {error.length > 0 && error.map((err, index) => <li key={index}>{err}</li>)}
            </ul>

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  name="email"
                  value={loginData.email}
                  placeholder="Email"
                  onChange={handleInputChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  name="password"
                  value={loginData.password}
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
