import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import PowerScaler from './pages/PowerScaler/PowerScaler.tsx';
import Header from './common/Header/Header.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PowerScaler />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Header />
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
