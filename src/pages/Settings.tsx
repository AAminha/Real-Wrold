import React, { useState } from 'react'

import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { useRecoilState } from 'recoil'

import { userAPI } from '@/API/user'
import api from '@/service/TokenService'
import { userState } from '@/states/userState'
import { PutUserRequestData } from '@/types/user'

const Settings = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useRecoilState(userState)
  const [newUserInfo, setNewUserInfo] = useState<PutUserRequestData | undefined>(
    currentUser && {
      ...currentUser,
      password: '',
    }
  )
  const { mutate: putUserMutate } = useMutation(userAPI.update, {
    onSuccess: (data) => {
      const response = data.user
      api.set(response.token)
      setCurrentUser({
        email: response.email,
        username: response.username,
        bio: response.bio,
        image: response.image,
      })
      newUserInfo && navigate(`/profile/@${newUserInfo.username}`)
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    newUserInfo && putUserMutate({ user: newUserInfo })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    newUserInfo && setNewUserInfo({ ...newUserInfo, [name]: value })
  }

  const handleLogout = () => {
    setCurrentUser(undefined)
    api.logout()
    navigate('/')
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="image"
                    value={newUserInfo && newUserInfo.image}
                    placeholder="URL of profile picture"
                    onChange={handleInputChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="username"
                    value={newUserInfo && newUserInfo.username}
                    placeholder="Your Name"
                    onChange={handleInputChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows={8}
                    name="bio"
                    value={newUserInfo && newUserInfo.bio}
                    placeholder="Short bio about you"
                    onChange={handleInputChange}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="email"
                    value={newUserInfo && newUserInfo.email}
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    value={newUserInfo && newUserInfo.password}
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
              </fieldset>
            </form>
            <hr />
            <button
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
