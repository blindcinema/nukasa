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
        <div className=" ml-10 grid grid-cols-12 gap-0 mt-12">
            <img src={post.featuredImage.url} alt="temp" className=" h-full col-start-1 col-span-3 "></img>
            <div className="col-span-9 text-[--nukasa_red] mt-16">

                <div className="ml-12">{categories}</div>
                <h2 className="post_title us:text-2xl md:text-6xl lg:text-4xl lg:pl-12">{post.title}</h2>
                <div className="uppercase font-[Oswald] us:text-xs mt-1 mb-1 us:mt-8 md:mt-12 md:text-base md:pl-12"> by {post.author.name}</div>
            </div>
        </div>
    )
};