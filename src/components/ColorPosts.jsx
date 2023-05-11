import styles from "./ColorPosts.module.css";
import { Inter } from "next/font/google";
import MoreButton from "./MoreButton";
const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
  })
export default function ColorPosts({ post }) {
    return (
        <div className="grid grid-cols-3 mt-16 ">
            <div className="bg-[#C8D3AD] text-[--nukasa_red] w-full h-[32rem] aspect-square flex flex-col flex-wrap">
                <h3 className={`${inter.className} mt-12 ml-8 text-3xl font-thin`}>Personal Blog</h3>
                <div className={`font-[Oswald] ml-12 mt-12 text-4xl leading-relaxed h-32 pr-8`}>Listen Mane, I&apos;ve been working Crazy all day and night to make This shit work and I&apos;m losing it High key</div>
                <div className="uppercase ml-12 mt-32 font-[Oswald]">by Simiux</div>
                <MoreButton className="ml-12 text-center flex mt-8 w-min text-3xl"></MoreButton>
            </div>
            <div className="bg-[#29294E] text-white w-full h-[32rem] aspect-square flex flex-col">
                <h3 className={`${inter.className} mt-12 ml-8 text-3xl font-thin`}>Audiobites</h3>
                <div className={`font-[Oswald] ml-12 mt-12 text-4xl leading-relaxed h-32 pr-8`}>Here are some of the dope Sounds I discovered this Week</div>
                <div className="uppercase ml-12 mt-32 font-[Oswald]">by Simiux</div>
                <MoreButton className="ml-12 text-center flex mt-8 w-min text-3xl"></MoreButton>
            </div>
            <div className="bg-[#EFCC5F] text-[--nukasa_red] w-full h-[32rem] aspect-square " >
                <h3 className={`${inter.className} mt-12 ml-8 text-3xl font-thin`}>Personal Blog</h3>
                <div className={`font-[Oswald] ml-12 mt-12 text-4xl leading-relaxed h-32 pr-8`}>There&apos;s a lot of text here, oh boy!! I hope it doesn&apos;t overflow and fuck up the rest of the div or the page!!!</div>
                <div className="uppercase ml-12 mt-32 font-[Oswald]">by Simiux</div>
                <MoreButton className="ml-12 text-center flex mt-8 w-min text-3xl"></MoreButton>
            </div>
        </div>
    )
}