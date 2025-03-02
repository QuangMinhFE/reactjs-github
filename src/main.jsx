import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './assets/pages/login.jsx'
import RegisterPage from './assets/pages/register.jsx'
import UserPage from './assets/pages/user.jsx'
import ProductPage from './assets/pages/product.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TodoApp from './assets/components/js/TodoApp.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <TodoApp />,
    },

    {
      path: '/users',
      element: <UserPage />
    },
    {
      path: '/products',
      element: <ProductPage />
    },],
},
{
  path: '/login',
  element: <LoginPage />
},
{
  path: '/register',
  element: <RegisterPage />
},]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
