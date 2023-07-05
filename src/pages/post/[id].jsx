import { getDoc,doc, } from "firebase/firestore";
import { db } from "@/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
export default function Page({query}) {
    console.log(query);

    const storage = getStorage();
    const router = useRouter();
    const storageRef = ref(storage);
    const [post, setPost] = useState();
    const [error, setError] = useState(false);
    const [headerImage, setHeaderImage] = useState("");
    useEffect(() => {
        const docRef = doc(db, "blog", `${router.query.post}` );
        const grabPost = async() => {
            const postSnap = await getDoc(docRef);
            if (postSnap.exists()) {

                setPost(postSnap.data());
                getDownloadURL(ref(storage, `${postSnap.data().header_image}`))
                    .then((response) => {
                        setHeaderImage(response);
                        console.log(response);
                    })
              } else {
                setError(true);
              }
            }
        grabPost();
    },[])



    // TODO image
    return (
        <>
        <div> {post === undefined ? <div>WAIT</div> :
             <div>
                Post url: {router.query.id}
                <br></br>
                Post id: {router.query.post}
                <br></br>
                Post title:{post.name}
                <br></br>
                Post content:{post.content[0].value}
                <br></br>
                Post image:{post.header_image}
                <img src={headerImage}></img>
            </div>
            }
        </div>
        </>
    )
}
