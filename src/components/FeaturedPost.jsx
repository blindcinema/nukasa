import styles from "./FeaturedPost.module.css";
import Link from "next/link";
export default function FeaturedPost({ post }) {
    const bgImg = post.featuredImage.url;

    return (
        <Link className="bg-[#EFCC5F] flex us:h-48 sm:h-64 md:h-96 overflow-hidden cursor-pointer mb-9" href={post.slug}>
            <div style={{backgroundImage:`url(${bgImg})`}} alt="temp" className="us:w-32 sm:w-48 md:w-72 lg:h-auto lg:w-4/12 bg-no-repeat bg-cover"></div>

            <div className={`${styles.vertical_stripe} sm:text-xs sm:w-4 md:text-lg md:w-5 lg:w-5 lg:leading-3`}>
                    <div className={`${styles.stripe_text} us:mb-6 sm:mb-12 us:text-[0.5rem] us:leading-[0.9rem] md:text-sm md:mr-4 lg:mb-12 `}>{post.categories[0].name}</div>
                    <div className={`${styles.stripe_text} us:mb-6 sm:mb-12 us:text-[0.5rem] us:leading-[0.9rem] md:text-sm md:mr-4 lg:mb-12 `}>{post.categories[0].name}</div>
                    <div className={`${styles.stripe_text} us:mb-6 sm:mb-12 us:text-[0.5rem] us:leading-[0.9rem] md:text-sm md:mr-4 lg:mb-12 `}>{post.categories[0].name}</div>
                </div>

            <div className="post_container text-[--nukasa_purple] mr-2 sm:ml-20 sm:mt-6 md:mt-12">
                <h2 className="post_title us:text-2xl md:text-6xl lg:text-8xl lg:pl-12">{post.title}</h2>
                <div className="post_excerpt us:text-xs  us:mt-6 sm:pl-8 sm:pr-4 sm:text-base md:text-xl lg:text-2xl lg:mt-12 md:mb-12 md:pl-24">{post.excerpt}</div>
                
                <div className="uppercase font-[Oswald] us:text-xs mt-1 mb-1 us:mt-8 md:mt-12 md:text-base md:pl-12"> by {post.author.name}</div>
            </div>
        </Link>
    )
}