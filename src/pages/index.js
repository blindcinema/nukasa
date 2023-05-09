import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/router";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts } from "../../services";
import Head from 'next/head'
import FeaturedPost from "@/components/FeaturedPost";

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
      return <FeaturedPost post = {post.node} key= {post.title} />
    else return;
    })

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

        <div className="wrapper min-h-screen  bg-[#F6E2C9] ">

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