import { db } from "@/firebase";

const { collection, getDocs } = require("firebase/firestore");
const { useState, useEffect } = require("react");

export default function grabPosts(){
    const [blogs, setBlogs] = useState();
    const blogsRef = collection(db, "blog");
    useEffect(()=> {
        const blogArray = [];
        const getBlogs = async() => {
            const blogSnapshot = await getDocs(blogsRef);
            blogSnapshot.forEach((item) => {
                blogArray.push(item.data());
            })            
            setBlogs(blogArray);
        }   
        getBlogs();

    },[])
    return blogs;
}