import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Layout from './component/Layout.jsx'
import Contact from './pages/Contact.jsx'
import Skills from './pages/Skills.jsx'
import Exp from './pages/Exp.jsx'
import Messages from './pages/Messages.jsx'
import Login from './pages/Login.jsx'
import { Themeprovider } from './component/Theme.jsx'
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Skills />}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/exp' element={<Exp />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/mess' element={<Messages/>}></Route>
      </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(


  
<Themeprovider>
  <RouterProvider router={router} />
  </Themeprovider>
)
