import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";


export default function Blogs() {

   const [blogs, setBlogs] = useState();
   const [blogsId, setBlogsId] = useState();
    const blogsRef = collection(db, "blog");
    useEffect(()=> {
        const blogArray = [];
        //hacky
        const idArray = [];
        const getBlogs = async() => {
            const blogSnapshot = await getDocs(blogsRef);
            blogSnapshot.forEach((item, index) => {
                blogArray.push(item.data());
                idArray.push(item.id);
            })            
            blogArray.forEach((item,index) => {
                blogArray[index].id = idArray[index];    
            })
            setBlogs(blogArray);
            setBlogsId(idArray);
        }   
        getBlogs();      
    },[]) 

    return (
        <div className="">
            <Navbar  />
            <div className="mt-16 flex w-full flex-col" >
                <div className="">
                    List of all blogs:
                </div>
            { blogs === undefined
            ?
             <div>Waiting...</div>
            : <ul>
             {blogs.map((item,index) => {
                const trimmedurl = Array.from(item.name).filter((char) => {return char !== " "}).join("").toLowerCase();
                return <li key={trimmedurl} className="">
                    <Link href={{pathname: `post/${trimmedurl}`, query: { post: item.id }}} >{item.name}</Link>
                </li>
                
            
            
        
            })}
            </ul>  }
            </div>
        </div>
    )
}
