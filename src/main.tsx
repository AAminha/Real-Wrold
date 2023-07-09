import React from 'react'

import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import App from './App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      // suspsnse: 아직 렌더링이 준비되지 않은 컴포넌트가 있을 때 로딩 화면을 보여주고 로딩이 완료되면 해당 컴포넌트를 보여주는 리액트 내장기능
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
)
