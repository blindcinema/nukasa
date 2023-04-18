import '@/styles/globals.css'
import { Inter, Oswald } from "@next/font/google";
import localFont from "@next/font/local";

const Jaapokki = localFont(
  {src:"../../public/fonts/jaapokkisubtract-regular.woff",
   variable:"--font-nukasa_logo"});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Inter"
  }
);
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Oswald"
  }
);

export default function App({ Component, pageProps }) {

  return <>
    <div >
      <Component {...pageProps} />
    </div>
  </>
}
