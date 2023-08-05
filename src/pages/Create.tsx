import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import { PostArticleRequestData } from '@/types/articles'

const Create = () => {
  const [tag, setTage] = useState<string>('')
  const [articleInfo, setArticleInfo] = useState<PostArticleRequestData>({
    title: '',
    description: '',
    body: '',
    tagList: [],
  })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setArticleInfo({ ...articleInfo, [name]: value })
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form>
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
                  type="button"
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
