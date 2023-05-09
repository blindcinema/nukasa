import moment from "moment/moment";
import Link from "next/link";

function PostCard({ post }) {
    return (
        <div className="blogpost flex flex-col text-[--nukasa_red] rounded-lg border border-[--nukasa_red] us: ml-4 mr-4 mb-8 sm:">
            <div className="blogpost_tags text-xs us:hidden sm:block pt-2 pl-4">TAGS1, TAGS 2, TAG 3 LONG</div>
            <div className="post_author p-4 ">Author: <Link href="leads to all posts by author" className="hover:underline">{post.author.name}</Link></div>
            <h2 className="blogpost_title us:text-2xl sm:text-3xl pt-1 pl-4 mb-4 hover:text-[--nukasa_purple]"><Link href={`post/${post.slug}`}>{ post.title }</Link></h2>
            <div className="flex justify-center w-full">
                <img src={post.featuredImage.url} alt={post.title} className="w-max"/>
            </div>
            <div className="blogpost_body us:p-4 text-sm leading-tight tracking-normal sm:leading-normal md:text-lg">{post.excerpt}</div>
            <div className="blogpost_body us:p-4 text-sm leading-tight tracking-normal sm:leading-normal md:text-lg">{post.content}</div>
        </div>
    )
}

export default PostCard
