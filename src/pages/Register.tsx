import React, { useState } from 'react'

import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { userAPI } from '@/API/user'
import api from '@/service/TokenService'
import { userState } from '@/states/userState'
import { ErrorData, PostRegisterRequestData } from '@/types/user'

const Register = () => {
  const navigate = useNavigate()
  const [, setCurrentUser] = useRecoilState(userState)
  const [registerData, setRegisterData] = useState<PostRegisterRequestData>({
    username: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState<string[]>([])
  const { mutate: postRegisterMutate } = useMutation(userAPI.register, {
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
      const status = err.response?.status
      if (status === 403 || status == 422) {
        const errors = err.response?.data as ErrorData
        setError(Object.entries(errors.errors).map(([key, value]) => `${key} ${value}`))
      }
    },
  })
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="username"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
