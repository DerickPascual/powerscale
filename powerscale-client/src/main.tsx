import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App.tsx';
import PowerScaler from './pages/PowerScaler/PowerScaler.tsx';
import Faq from './pages/Faq/Faq.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PowerScaler />
      },
      {
        path: "powerscale",
        element: <PowerScaler />
      },
      {
        path: "/faq",
        element: <Faq />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
