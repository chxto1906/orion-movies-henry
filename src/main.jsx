/**
 * El código importa los componentes y archivos necesarios para crear una aplicación de React 
 * que utiliza Redux y React Router para manejar la navegación. Luego, se crea el nodo raíz de ReactDOM 
 * y se renderiza la aplicación
 */


import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { OrionApp } from './OrionApp'
import { store } from './store'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <OrionApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
