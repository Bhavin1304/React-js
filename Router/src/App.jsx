import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProductDetail from './components/ProductDetail'
import Carts from './components/Carts'
import { products as productsData } from "./json/products"
import { useState } from 'react'

function App() {
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState(productsData); 

  return (
    <>
      <nav>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Product</Link>
        <Link to={"/contacts"}>Blog</Link>
        <Link to={"/carts"}>Cart</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home products={products} setCartList={setCartList} />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/products' element={<ProductDetail />} />
        <Route path='/carts' element={<Carts cartList={cartList} setCartList={setCartList} />} />
      </Routes>
    </>
  )
}

export default App
