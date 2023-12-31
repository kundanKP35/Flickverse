import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Lato } from 'next/font/google'
import { toast,ToastContainer } from 'react-toastify';
 
const lato = Lato({
  weight: ['300','400','700','900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'FlickVerse',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
