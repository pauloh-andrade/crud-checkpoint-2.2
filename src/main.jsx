import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'

import { Home, Erro, Produtos, EditarProdutos } from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/produtos/editar/:id', element: <EditarProdutos /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
