import { Navbar } from "@/components/Navbar";
import MoreButton from "@/components/MoreButton";
import { useRouter } from "next/router";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts } from "../../services";
import Head from 'next/head'
import FeaturedPost from "@/components/FeaturedPost";
import NewestPost from "@/components/NewestPost";
import OlderPosts from "@/components/OlderPosts";

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

          <div className="nav-wrappertop-0 shadow-sm shadow-stone-500">

            <Navbar onLogin ={goToLoginPage}/>
            <div className="stripe bg-[#29294E] h-5 sm:h-10 w-full flex items-center text-2xl leading-10 ">
              <div className="stripe__spacer w-2/12"></div>
              <div className="text-sm sm:text-2xl text-white mr-2 drop-shadow-lg " >TAKE IT EASY; </div> <div className="text-sm sm:text-2xl text-[#F6E2C9] drop-shadow-lg"> BUT TAKE IT</div>
            </div>

          </div>
          <main className=" blog_container flex justify-center flex-col">
{/*             <div className="blog_item">
              <div>
                { posts.map((post,index) => (
                  <PostCard post={post.node} key={post.title} />
                )) }
              </div>
              <div>
                <PostWidget />
                <Categories />
              </div>
          </div> */}
            <div>
              <div>
                {featuredPostElement}
                <div className=" ml-8 mb-12 flex flex-col">
                  <div className="text-6xl after:border-[--nukasa_purple] after:border-4 after:rounded-2xl after:mt-4 after:mb-8 after:h-px after: after:block">
                    <MoreButton className="us:hidden sm:block absolute right-12 top-[33.5rem] hover:bg-yellow-400 text-5xl">More</MoreButton>           
                    <h2 className="ml-0 text-[--nukasa_red]">Fresh out the Oven</h2>
                    </div>
                {newestPostElement}
                {olderPostsElement}
                
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