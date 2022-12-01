import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"

// Components
import Root from "./pages/root"
import NotPage from "./pages/not-page"
import Home from "./pages/home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotPage />,
    children: [
      { 
        path: "/",
        element: <Home />,
        children: [
          {
            path: "dashboard",
            element: <h1>Dashboard</h1>
          },
          {
            path: "accounts",
            element: <h1>Accounts</h1>
          },
          {
            path: "sales",
            element: <h1>Sales</h1>
          },
          {
            path: "expenses",
            element: <h1>Expenses</h1>
          },
          {
            path: "reports",
            element: <h1>Reports</h1>
          }
        ]
      },
      { 
        path: "/login",
        element: <h1>Login</h1>
      },
      { 
        path: "/register",
        element: <h1>Register</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
