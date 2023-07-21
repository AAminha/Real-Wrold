import React, { ChangeEvent, useState } from 'react'

import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'

import { userAPI } from '@/API/user'
import { PostLoginRequest } from '@/types/auth'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<PostLoginRequest>({
    email: '',
    password: '',
  })
  const { mutate: postLoginMutate } = useMutation(userAPI.login, {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = await postLoginMutate
    console.log(data)
    console.log('submit')
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
              <li>That email is already taken</li>
            </ul>

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  name="email"
                  value={loginInfo.email}
                  placeholder="Email"
                  onChange={handleInputChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  name="password"
                  value={loginInfo.password}
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
