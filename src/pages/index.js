import { Navbar } from "@/components/Navbar";
import MoreButton from "@/components/MoreButton";
import { useRouter } from "next/router";
import { PostCard, PostWidget, Categories } from "../components";
import  NukasaTitleComponent  from "../../public/svg/Nukasa Text.svg"
import { getPosts } from "../../services";
import Head from 'next/head'
import FeaturedPost from "@/components/FeaturedPost";
import NewestPost from "@/components/NewestPost";
import OlderPosts from "@/components/OlderPosts";
import ColorPosts from "@/components/ColorPosts";
import Link from "next/link";
import { PageContextProvider } from "@/context/PageContext";

export default function Dashboard({ posts }) {
    const router = useRouter();

    function goToAdminPage(){
      router.push("/Admin");
  }

  function goToLoginPage(){
    router.push("/login");
}
const featuredPostElement = posts.map ((post,index) => {
  if (post.node.featuredPost === true)
  return <FeaturedPost post = {post.node} key= {post.node.title} />
  else return;
})
const maxDate = new Date(Math.max(
  ...posts.map(post => {
     return new Date(post.node.createdAt)
  })));

// FILTERING NEWEST POST TO SHOW ON PAGE
const newestPostElement =
  posts
  .filter((post) => {
    const postDate = new Date(post.node.createdAt).getTime();
    return postDate  === maxDate.getTime();
  })
  .map((post,index) => {
     return <NewestPost post= {post.node} key={post.node.title} />
     })

     const olderPostsElement = <OlderPosts posts ={posts}/>


    
    return  (
    <>
      <Head>
        <title>Nukasa | WIP</title>
        <meta name="description" content="Nukasa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      
    <div>

        <div className="wrapper bg-[#F6E2C9] ">

          <div className="nav-wrapper">

            <Navbar onLogin ={goToLoginPage}/>
            

          </div>
          <main className="flex justify-center flex-col mt-16">
          <div className="stripe bg-[#29294E] h-5 sm:h-10 w-full flex items-center text-2xl leading-10 ">
              <div className="stripe__spacer w-2/12"></div>
              <div className="text-sm sm:text-2xl text-white mr-2 drop-shadow-lg " >TAKE IT EASY; </div> <div className="text-sm sm:text-2xl text-[#F6E2C9] drop-shadow-lg"> BUT TAKE IT</div>
            </div>
            <div>
              <div>
                {featuredPostElement}
                <div className=" mb-12 flex flex-col">
                  <header className="flex flex-col content-center text-6xl after:border-[--nukasa_purple] after:ml-2 after:mr-2 after:border-4 after:rounded-2xl after:mt-4 after:mb-8 after:h-px after:block">                              
                    <Link href={"#"} className=" us:hidden sm:flex text-3xl self-end mr-4 cursor-pointer relative top-16 " >
                      <span className="mr-1">More</span>
                      <MoreButton className=" hover:bg-[#EFCC5F] hover:rounded-full scale-75" />                  
                    </Link>
                    <h2 className="ml-8 text-[--nukasa_red] ">Fresh out the Oven</h2>  
                    </header>
                {newestPostElement}
                {olderPostsElement}
                <div className="flex flex-row us:ml-8 us:mr-8 items-center">
                  <NukasaTitleComponent className=" logo__text us:hidden sm:block max-h-8 h-8 mr-8 translate-y-1 " /> 
                  <span className="inline-block text-4xl tracking-wider font-[Oswald] text-[--nukasa_red]">Personal Blogs and Audiobites</span>
                </div>
                <ColorPosts post={posts}/>
                
                </div>
                
              </div>
            </div>
          </main>

        </div>
      </div>
    </>
    )

}



export async function getStaticProps() {
  const posts = await getPosts() || [];
  return {
    props: { posts }
  } 
}