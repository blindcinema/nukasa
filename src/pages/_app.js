import '@/styles/globals.css'
import localFont from 'next/font/local'
import { Inter } from "next/font/google"
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
})
const jaapokki = localFont({
  src: "../../public/fonts/jaapokkisubtract-regular.woff",
  subsets: ['latin'],
  variable: '--font-nukasa_logo',
})
const oswald = localFont({
  src: "../../public/fonts/Oswald-Regular.ttf",
  subsets: ["latin"],
  variable: "--font_oswald"
})


export default function App({ Component, pageProps }) {

  return <>
    <div >
      <Component {...pageProps} />
    </div>
  </>
}
