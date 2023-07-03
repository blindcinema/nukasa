
import { Sidebar_element } from "@/components/admin/Sidebar_element";
import { useState } from "react";
import { IoIosBody, IoIosDesktop, IoIosGlobe } from "react-icons/io";
import { Navbar } from "@/components/Navbar";

const defaultState = {
    siteManagement: "hidden",
    userManagement: "hidden",
    administration: "hidden",
}

export default function Admin() {

    const [pageState, setPageState] = useState(defaultState);
    function gotoSiteManagement(){
        if (pageState.siteManagement === "hidden") {
            setPageState(
                {...pageState,
                siteManagement: "block",
                }
        )
        } if (pageState.siteManagement === "block") {
            setPageState(
                {...pageState,
                siteManagement: "hidden",
                }
            )
        }

    }

    const empty_icon = <div className="w-[16px] h-[16px]"></div>

    return (
        <>
            <div className="Wrapper flex">
                <div className="nav-wrapper">
                <Navbar/>
                </div>
            </div>
            <main className="flex justify-center flex-col mt-16">
            
            <div className="stripe bg-[#29294E] h-5 sm:h-10 w-full flex items-center text-2xl leading-10 justify-between">
                <div className="text-sm sm:text-2xl text-white mr-2 drop-shadow-lg ml-12" >Navigation/Todo/Stuff </div><div className="self-end text-white mr-12">Username</div>
                </div>


            <div className="sidebar flex flex-col w-2/12 text-[--nukasa_red] border-r-2 h-full">
                <div className="flex rounded-lg w-full">
                    <div className="font-[Oswald] font-[400] text-2xl h-max w-full mb-8">
                        <div className="hover:bg-[--nukasa_purple_highlight] pl-4">Templates</div>
                        <ul className="text-xl">
                            <li className="hover:bg-[--nukasa_purple_highlight] pl-12 mb-1 cursor-pointer ">List Blog</li>
                            <li className="hover:bg-[--nukasa_purple_highlight] pl-12 mb-1 cursor-pointer  ">Instructional Blog</li>
                            <li className="hover:bg-[--nukasa_purple_highlight] pl-12 mb-1 cursor-pointer  ">Plugin Review</li>
                            <li className="hover:bg-[--nukasa_purple_highlight] pl-12 mb-1 cursor-pointer  ">Glossary Input</li>
                        </ul>
                    </div>
                    </div>
                <div className="flex rounded-lg w-full">
                    <div className="font-[Oswald] font-[400] text-2xl h-max w-full">
                        <div className="hover:bg-[--nukasa_purple_highlight] pl-4">Post Review</div>
                        <ul className="text-xl">
                            <li className="hover:bg-[--nukasa_purple_highlight] pl-12 mb-1 cursor-pointer  ">For Review</li>
                            <li className="hover:bg-[--nukasa_purple_highlight] pl-12 mb-1 cursor-pointer  ">Published</li>
                        </ul>
                    </div>
                </div>
                <div className="flex rounded-lg w-full">
                    <div className="font-[Oswald] font-[400] text-2xl h-max w-full">
                        <div className="hover:bg-[--nukasa_purple_highlight] pl-4">User</div>
                        <ul className="text-xl">
                            <li className="hover:bg-[--nukasa_purple_highlight] pl-12 mb-1 cursor-pointer ">Drafts</li>
                            
                        </ul>
                    </div>
                </div>
                

                
            </div>
            </main>
        </>
    )
}