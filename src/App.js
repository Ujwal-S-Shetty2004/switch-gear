import React from 'react'
import{ BrowserRouter , Routes , Route}  from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Category from './Pages/Category'
import FilterProduct from './Pages/FilterProduct'
function App() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path="/Cat-Product/:catname" element={<FilterProduct/>}/>
          

       
      </Routes>
      </BrowserRouter>



      </>
    </div>
  )
}

export default App
