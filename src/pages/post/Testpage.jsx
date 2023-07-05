import { db } from "@/firebase"
import { doc, getDoc, collection, getDocs, query, updateDoc, setDoc } from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { UserAuth } from "@/context/AuthContext"
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
export default function Testpage() {
    const storage = getStorage();
    const imageRef = ref(storage, );
    const storageRef = ref(storage);
    const [data, setData] = useState([]);
    const [blog, setBlog] = useState();
    const [loaded, setLoaded] = useState(false);
    const user = UserAuth();
    const categories = collection(db, "categories");
    const blogs = collection(db, "blog");
    const users = collection(db, "users");
    const [input, setInput] = useState();
    // HOW TO GET DATA FROM A COLLECTION
/*     useEffect(()=> {
        const testarray = [];

        const snapFunction = async () => {
            const querySnapshot = await getDocs(users);
            querySnapshot.forEach((doc)=> {
                testarray.push(doc.id);
                setLoaded(true);
            })
            setData(testarray);
        }
        snapFunction();   
    }
    ,[]) */

    const [imgRef, setImgRef] = useState([]);

    useEffect(()=> {
        const blogArray = [];
        const imgArray = [];
        const getBlogs = async() => {
            const blogSnapshot = await getDocs(blogs);
            blogSnapshot.forEach((item) => {
                blogArray.push(item.data());
            })
            blogArray.forEach((items) => {
                getDownloadURL(ref(storage, `${items.header_image}`))
                .then(
                (url, index) => {
                    imgArray.push(url);
                    setImgRef((old) => ([...old, url]));
                }
                );
            })
            
            setLoaded(true);
            setBlog(blogArray);
        }   
        getBlogs();

    },[])
    console.log(imgRef);
    /* TODO 


    MARKDOWN TO JSX https://github.com/probablyup/markdown-to-jsx
*/
    return (

        <>
            <div className="flex justify-center bg-gray-500">
            TESTING PAGE
            </div>
            <div>
            { blog === undefined ? <div>Waiting...</div> : blog.map((item, index) => (

            <div key={item.name}>
                <div className="font-bold">
                {item.name}
                </div>
                <div className=""> {item.content[0].value}
                
                </div>
                <img alt="item.name" className="w-48" src={`${imgRef[index]}`} />
            </div>
                ))}
            </div>

        </>
        
    )
}