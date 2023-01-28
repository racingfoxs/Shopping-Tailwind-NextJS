import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import React, {useState } from "react";

export default function App({ Component, pageProps }) {
  
  const  [cart, setCart] = useState(false);
  

  return( 
  <>
  <Header cart={cart} setCart={setCart}/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

