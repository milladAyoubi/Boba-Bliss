// css
import './globals.css';
import { Raleway, Poppins, OpenSans } from 'next/font/google'


import Nav from './components/Nav';
import CartMobileIcon from './components/CartMobileIcon';
import CartProvider from './context/CartContext'
import CartMobile from './components/CartMobile';
import CartDesktop from './components/CartDesktop';
import Footer from './components/Footer'


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
    return ( 

      <CartProvider>
      <html lang = 'en' >
        <body className={`${raleway.variable} ${poppins.variable} font-poppins`}> 
        <Nav/>
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