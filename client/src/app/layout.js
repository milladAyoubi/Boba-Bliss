// css
import './globals.css';
import { Raleway, Poppins, OpenSans } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400']
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400']
})


export default function RootLayout({ children }) {
    return ( 
      <html lang = 'en' >
        <body className={`${raleway.variable} ${poppins.variable} font-poppins`}> 
        <h1 className='font-raleway'>Headline 1</h1>
        <h1 className='font-poppins'>Headline 1</h1>
        { children } 
        
        </body>
      </html >
    );
}