
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutComponent from '../../components/AboutComponent'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import CartComponent from '../../components/CartComponent'
import CheckoutComponent from '../../components/CheckoutComponent'
import ContactComponent from '../../components/ContactComponent'
import LoginComponent from '../../components/LoginComponent'
import ProductById from '../../components/ProductById'
import RegisterComponent from '../../components/RegisterComponent'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function ProductsPage() {

  const router = useRouter()
  const [componentLoaded, setComponentLoaded] = useState(false);

  useEffect(() => {
    setComponentLoaded(true)
  }, [])

  if (!componentLoaded) {
    return null
  }

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Hero />
              <Products />
              <Footer />
            </>
          } />
          <Route path='/about' element={<AboutComponent/>}/>
          <Route path='/cart' element={<CartComponent/>}/>
          <Route path='/checkout' element={<CheckoutComponent/>}/>
          <Route path='/contact' element={<ContactComponent/>}/>
          <Route path='/login' element={<LoginComponent/>}/>
          <Route path='/product/:id' element={<ProductById/>}/>
          <Route path='/products' element={
            <>
              <Navbar/>
              <Products/>
              <Footer/>
            </>
          } />
          <Route path='/register' element={<RegisterComponent/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}