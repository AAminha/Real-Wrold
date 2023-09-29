import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { articleAPI } from '@/API/articles'
import { PostArticleRequestData } from '@/types/articles'
import { ErrorData } from '@/types/user'

const Create = () => {
  const navigate = useNavigate()
  const [tag, setTage] = useState<string>('')
  const [error, setError] = useState<string[]>([])
  const [articleInfo, setArticleInfo] = useState<PostArticleRequestData>({
    title: '',
    description: '',
    body: '',
    tagList: [],
  })

  const { mutate: postArticleMutate } = useMutation(articleAPI.post, {
    onSuccess: (data) => {
      const slug = data.article.slug
      navigate(`/article/${slug}`)
    },
    onError: (err: AxiosError) => {
      const status = err.response?.status
      if (status === 403 || status === 422) {
        const errors = err.response?.data as ErrorData
        setError(Object.entries(errors.errors).map(([key, value]) => `${key} ${value}`))
      }
    },
  })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setArticleInfo({ ...articleInfo, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    postArticleMutate(articleInfo)
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              {error.length > 0 && error.map((err, index) => <li key={index}>{err}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    name="title"
                    value={articleInfo.title}
                    onChange={handleInputChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    name="description"
                    value={articleInfo.description}
                    onChange={handleInputChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    name="body"
                    value={articleInfo.body}
                    onChange={handleInputChange}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    name="tag"
                    value={tag}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setTage(e.target.value)
                    }}
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === 'Enter' && !articleInfo.tagList.includes(tag)) {
                        e.preventDefault()
                        setArticleInfo({ ...articleInfo, tagList: [...articleInfo.tagList, tag] })
                        setTage('')
                      }
                    }}
                  />
                  <div className="tag-list">
                    {articleInfo.tagList.map((tagItem: string, index: number) => (
                      <span
                        className="tag-default tag-pill ng-binding ng-scope"
                        key={tagItem}
                      >
                        <i
                          className="ion-close-round"
                          onClick={() => {
                            const deletedList = articleInfo.tagList.filter(
                              (item, idx) => index !== idx
                            )
                            setArticleInfo({ ...articleInfo, tagList: deletedList })
                          }}
                        ></i>
                        {tagItem}
                      </span>
                    ))}
                  </div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
