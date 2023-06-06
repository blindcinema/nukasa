import styles from "./ColorPosts.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import MoreButton from "./MoreButton";
const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
  })
export default function ColorPosts({ post }) {
    return (
        <div className="grid us:grid-rows-3 md:grid-cols-3 mt-12 ">
            <div className="bg-[#C8D3AD] text-[--nukasa_red] flex flex-col content-between justify-between p-8 ">
                <h3 className={`${inter.className} font-thin text-3xl mt-16`}>Personal Blog</h3>                
                <div className={`font-[Oswald] us:text-3xl mt-16 `}>Listen Mane, I&apos;ve been working Crazy all day and night to make This shit work and I&apos;m losing it High key</div>                
                <div className="uppercase sm:ml-12 pt-32 font-[Oswald] mb-4 mt-auto ">by Simiux</div>
                <Link href="#"><MoreButton className="sm:ml-12 text-center flex pt-auto w-min text-3xl hover:bg-[#EFCC5F] hover:rounded-full"></MoreButton></Link>
            </div>
            <div className="bg-[#29294E] text-white flex flex-col content-between justify-between p-8  ">
                <h3 className={`${inter.className} font-thin text-3xl mt-16`}>Audiobites</h3>
                <div className={`font-[Oswald] font-thin text-3xl mt-16 `}>Here are some of the dope Sounds I discovered this Week</div>
                <div className="uppercase sm:ml-12 pt-32 font-[Oswald] mb-4 mt-auto">by Simiux</div>
                <Link href="#"><MoreButton className="sm:ml-12 text-center flex pt-auto w-min text-3xl hover:bg-[--nukasa_red] hover:rounded-full"></MoreButton></Link>
            </div>
            <div className="bg-[#EFCC5F] text-[--nukasa_red] flex flex-col content-between justify-between p-8" >

                <h3 className={`${inter.className} font-thin text-3xl mt-16`}>Personal Blog</h3>
                <div className={`font-[Oswald] font-thin text-3xl mt-16 `}>There&apos;s a lot of text here, oh boy!! I hope it doesn&apos;t overflow and fuck up the rest of the div or the page!!!</div>
                <div className="uppercase sm:ml-12 pt-32 font-[Oswald] mb-4 mt-auto">by Simiux</div>
                <Link href="#"><MoreButton className="sm:ml-12 text-center flex pt-auto w-min text-3xl hover:bg-white hover:rounded-full"></MoreButton></Link>
                

            </div>
        </div>
    )
}