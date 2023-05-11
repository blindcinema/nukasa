import Link from "next/link";

export default function NewestPost({ post }) {
    const categories =post.categories.map(
        (category, index) =>{
            if (index < post.categories.length -1) {
                return <span key={category.name}>{category.name}, </span>;
            } else {
                return <span key={category.name}>{category.name}</span>;
            }
            });
    return (
            <Link href={post.slug} id="newest post">
                <div className=" ml-10 grid grid-cols-12 gap-0 mt-12">
                    {/* <img src={post.featuredImage.url} alt="temp" className=" h-full col-start-1 col-span-3 max-h-[32rem] "></img> */}
                    <div className="max-w-96 h-96 min-h-96 col-start-1 col-span-3 " style={{background:`no-repeat center/cover url(${post.featuredImage.url})`}}></div>
                    <div className="col-span-8 text-[--nukasa_red] mt-16">

                        <div className="ml-12 mb-4">{categories}</div>
                        <h2 className="post_title us:text-4xl md:text-6xl lg:text-6xl lg:pl-12">{post.title}</h2>
                        <div className="uppercase font-[Oswald] us:text-xs mt-1 mb-1 us:mt-8 md:mt-12 md:text-base md:pl-12"> by {post.author.name}</div>
                    </div>
                </div>
            </Link>
    )
};