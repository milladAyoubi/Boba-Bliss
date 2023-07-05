// css
"use client"
import React, {useState} from 'react'
import './globals.css';
import { Raleway, Poppins, OpenSans } from 'next/font/google'


import Nav from './components/Nav';
import CartMobileIcon from './components/CartMobileIcon';
import CartProvider from './context/CartContext'
import CartMobile from './components/CartMobile';
import CartDesktop from './components/CartDesktop';
import Footer from './components/Footer'
import NavMobile from './components/NavMobile';
import Header from './components/Header'
import { fromJSON } from 'postcss';


const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400']
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','600','800','500']
})


export default function RootLayout({ children }) {
  const [navMobile, setNavMobile] = useState(false);
    return ( 
        
      <CartProvider>
      <html lang = 'en' >
        <body className={`${raleway.variable} ${poppins.variable} font-poppins`}> 
        <Header setNavMobile={setNavMobile} />

        <Nav/>
        <div className={`${navMobile ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-200`}>
        <NavMobile setNavMobile={setNavMobile}/>
        </div>
        <CartMobileIcon/>
        <CartMobile/>
        { children } 
        <CartDesktop/>
        <Footer/>
        </body>
       
      </html >
      </CartProvider>
     
    );
}