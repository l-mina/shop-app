import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Products from  "./components/Products";
import ErrorPage from "./components/ErrorPage";
import Navbar from './components/Nav'


function App() {
  


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes ErrorElement={<ErrorPage />}>
          <Route path="/"  element={<Home/>} />
          <Route path="/shop"  element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
