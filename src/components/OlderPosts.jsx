import Link from "next/link";

export default function OlderPosts(props) {
    let post = props.posts;
    const oldPosts = post
    .reverse()

    return (
        <div className="flex flex-col text-[--nukasa_red]">
            <div className=" ml-10 grid grid-cols-12 gap-8 mt-24">
                <Link id="post1" href={ oldPosts[1].node.slug } className="col-start-1 col-span-4 flex flex-col aspect-square">
                    <div className="h-[70%]" style={{background:`center/cover url(${oldPosts[1].node.featuredImage.url})`}}></div>
                    <span className="mb-1">{oldPosts[1].node.categories[0].name}</span>
                    <h2 className="mb-2 text-xl">{oldPosts[1].node.title}</h2>
                    <div className="uppercase font-[Oswald]">by {oldPosts[1].node.author.name}</div>    
                </Link>    

                <Link id="post2" href={ oldPosts[2].node.slug } className="col-span-4 flex flex-col"> 
                    <div className="h-[70%]" style={{background:`no-repeat center/cover url(${oldPosts[2].node.featuredImage.url})`}}></div>
                    <span className="mb-1">{oldPosts[2].node.categories[0].name}</span>
                    <h2 className="mb-2 text-xl">{oldPosts[2].node.title}</h2>
                    {/* <img src={oldPosts[2].node.featuredImage.url} alt="temp" className="max-w-lg max-h-fit"/> */}
                    <div className="uppercase font-[Oswald]">by {oldPosts[2].node.author.name}</div>
                </Link>

                <Link id="post3" href={ oldPosts[3].node.slug} className="col-span-4 flex flex-col"> 
                    <div className="h-[70%]" style={{background:`center/cover url(${oldPosts[3].node.featuredImage.url})`}}></div>
                    <span className="mb-1">{oldPosts[3].node.categories[0].name}</span>
                    <h2 className="mb-2 text-xl">{oldPosts[3].node.title}</h2>    
                    <div className="uppercase font-[Oswald]">by {oldPosts[3].node.author.name}</div>
                </Link>

            </div>
        </div>
    )
}