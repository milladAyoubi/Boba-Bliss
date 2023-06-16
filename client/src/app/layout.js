// css
import './globals.css';
import { Raleway, Poppins, OpenSans } from 'next/font/google'
import Nav from './components/Nav';
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400']
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','800','700']
})


export default function RootLayout({ children }) {
    return ( 
      <html lang = 'en' >
        <body className={`${raleway.variable} ${poppins.variable} font-poppins`}> 
        <Nav/>
        { children } 
        
        </body>
      </html >
    );
}