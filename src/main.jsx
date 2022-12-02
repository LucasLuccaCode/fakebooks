import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"

import NotPage from "./components/not-page"
import Root from "./pages/root"
import Home from "./pages/home"

// Store components
import Store from "./pages/home/store"
import StoreBooks, {
  loader as loaderBooks
} from "./pages/home/store/Books"
import SeeBook from "./pages/home/store/SeeBook"

// Home components
import Sales from "./pages/home/details/sales"

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
            element: <Sales />,
            children: [
              {
                path: "overview",
                element: <h2>Painel</h2>
              },
              {
                path: "subscriptions",
                element: <h2>Assinaturas</h2>
              },
              {
                path: "invoices",
                element: <h2>Faturas</h2>
              },
              {
                path: "customers",
                element: <h2>Clientes</h2>
              },
              {
                path: "deposits",
                element: <h2>Depósitos</h2>
              },
            ]
          },
          {
            path: "expenses",
            element: <h1>Expenses</h1>
          },
          {
            path: "reports",
            element: <h1>Reports</h1>
          },
          {
            path: "store",
            element: <Store />,
            children: [
              {
                index: true,
                loader: loaderBooks,
                element: <StoreBooks />
              },
              {
                path: ":bookId",
                element: <SeeBook />,
                loader: loaderBooks,
              }
            ]
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
