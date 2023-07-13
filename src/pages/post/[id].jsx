import { getDoc,doc, } from "firebase/firestore";
import { db } from "@/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { PageContext, } from "@/context/PageContext";
import Markdown from "markdown-to-jsx";
import { Navbar } from "@/components/Navbar";

export default function Page({query}) {
    const context = useContext(PageContext);

    const storage = getStorage();
    const router = useRouter();
    const storageRef = ref(storage);
    const [post, setPost] = useState();
    const [error, setError] = useState(false);
    const [headerImage, setHeaderImage] = useState("");
    const [postId, setPostId] = useState();
    const postquery = router.query.post;
    useEffect(() => {
        const docRef = doc(db, "blog", `${postquery}` );
        const grabPost = async() => {
            const postSnap = await getDoc(docRef);
            if (postSnap.exists()) {
                setPost(postSnap.data());
                setPostId(postSnap.id);
                getDownloadURL(ref(storage, `${postSnap.data().header_image}`))
                    .then((response) => {
                        setHeaderImage(response);
                    })
              } else {
                
              }
            }
        grabPost();
        
    },[])
    console.log(post);

    // TODO image
    return (

        <div> {post === undefined ? <div>WAIT</div> :
            <>
            <Navbar/>
             <div className="post flex flex-col bg-[--nukasa_champagne] pl-12 pr-12 mt-16">    
{/*                 <div>
                    Post url: {router.query.id}
                    Post id: {postId}
                </div> */}
                
                <h1 className="font-bold font-nukasa_title text-[--nukasa_red] md:text-8xl drop-shadow-lg mb-4">{post.name}</h1>
                <div className="mb-4">
                    <ul className="list-decimal flex ">
                        {post.tags.map((tag) => {return <li key={tag} className="p-auto">
                            <Link href={`/categories/${tag}`}>{tag} </Link>
                            </li> } )}
                    </ul>
                    </div>
                <div className="flex flex-row mb-4">
                    <span className="font-nukasa_title text-[--nukasa_red] md:text-2xl drop-shadow-lg inline-block">TODO: Autor with link, <span className="underline italic font-thin">`${"todo: date"}`</span> </span>
                </div>
                <div className="post__summary font-nukasa_title text-[--nukasa_red] md:text-lg drop-shadow-sm mb-8 pl-4">{post.summary}</div>                                
                <div className=" post__header_image h-[512px]  w-2/3" style={{background:`center/cover url(${headerImage})`}}></div>
                <div className="post__content flex flex-col w-2/3 mt-12 ">
                    <Markdown options={{
                        overrides: {
                            ul: {
                                props: {
                                    className: "list-disc pl-12"
                                }
                            },
                            ol: {
                                props: {
                                    className: "list-decimal pl-12"
                                }
                            },
                            h1: {
                                props: {
                                    className: "text-2xl mb-4"
                                }
                            },
                            h2: {
                                props: {
                                    className: "text-xl mb-2 pl-12"
                                }
                            },
                            img: {
                                props: {
                                    className: " m-4 max-w-lg"
                                }
                            }
                        }
                    }} className="flex flex-col">{
                    post.content[0].value}</Markdown>                   
                    </div>

            </div>
            </>
            }
        </div>
    )
}
