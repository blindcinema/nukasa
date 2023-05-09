import styles from "./FeaturedPost.module.css";
export default function FeaturedPost({ post }) {
    const bgImg = post.featuredImage.url;

    return (
        <div className="bg-[#EFCC5F] flex us:h-32 sm:h-48 md:h-72 overflow-hidden cursor-pointer">
            <div style={{backgroundImage:`url(${bgImg})`}} alt="temp" className="us:w-32 us:h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:h-auto lg:w-6/12 bg-no-repeat bg-cover"></div>

            <div className={`${styles.vertical_stripe} sm:text-xs sm:w-4 md:text-lg md:w-5 `}>
                    <div className={`${styles.stripe_text} us:mb-4 us:text-[0.5rem] us:leading-[1rem] md:text-sm md:mr-4`}>{post.categories[0].name}</div>
                    <div className={`${styles.stripe_text} us:mb-4 us:text-[0.5rem] us:leading-[1rem] md:text-sm md:mr-4 `}>{post.categories[0].name}</div>
                    <div className={`${styles.stripe_text} us:mb-4 us:text-[0.5rem] us:leading-[1rem] md:text-sm md:mr-4 `}>{post.categories[0].name}</div>
                </div>

            <div className="post_container text-[--nukasa_purple] mr-2 ml-2 sm:ml-20 sm:mt-6 md:mt-12">
                <h2 className="post_title us:text-2xl md:text-6xl lg:text-8xl">{post.title}</h2>
                <div className="post_excerpt us:text-xs  us:mt-6 sm:pl-8 sm:pr-4 sm:text-base md:text-xl lg:text-xl lg:mt-8 ">{post.excerpt}</div>
                
                <div className="uppercase font-[Oswald] us:text-xs mt-1 mb-1 us:mt-8 md:mt-6"> by {post.author.name}</div>
            </div>
        </div>
    )
}