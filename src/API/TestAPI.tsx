import React, { Suspense } from 'react'

import { useQuery } from 'react-query'

const Todos = () => {
  const { status, data, error } = useQuery('todos', fetchTodoList, {
    retry: 0, // 실패 시 재호출 몇 번 할지
    onSuccess: (data) => {
      // 성공 시 호출
      console.log(data)
    },
    onError: (e: any) => {
      // 실패 시 호출 (401, 404같은 에러가 아닌 api 호출이 실패한 경우 호출)
      console.log(e.message)
    },
  })

  if (status === 'loading') {
    return <span>isLoading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <Suspense fallback={<div>loading</div>}>
      <div>{data}</div>
    </Suspense>
  )
}

export default Todos
