import React, { useState } from 'react'

import { useNavigate } from 'react-router'
import { useRecoilState } from 'recoil'

import { userState } from '@/states/userState'
import { PutUserInfoRequest, UserInfoType } from '@/types/auth'

const Settings = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useRecoilState(userState)
  const [newUserInfo, setNewUserInfo] = useState<PutUserInfoRequest>({
    email: '',
    password: '',
    username: '',
    bio: '',
    image: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userInfo)
    // 변경된 값 제출
    navigate(`/profile/@${newUserInfo.username}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewUserInfo({ ...newUserInfo, [name]: value })
  }

  const handleLogout = () => {
    setUserInfo(undefined)
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
                    value={newUserInfo.image}
                    placeholder="URL of profile picture"
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="username"
                    value={newUserInfo.username}
                    placeholder="Your Name"
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows={8}
                    name="bio"
                    value={newUserInfo.bio}
                    placeholder="Short bio about you"
                    onChange={handleChange}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="email"
                    value={newUserInfo.email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    value={newUserInfo.password}
                    placeholder="Password"
                    onChange={handleChange}
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
