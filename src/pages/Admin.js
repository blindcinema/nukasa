import { BlogForm } from "@/components/admin/BlogForm";
import { Sidebar_element } from "@/components/admin/Sidebar_element";
import { useState } from "react";
import { IoIosBody, IoIosDesktop, IoIosGlobe } from "react-icons/io";

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
        <div className="Wrapper flex">
            <div className="Sidebar w-60 bg-[--nukasa_purple] min-h-screen h-screen flex flex-col">
            <div className="Sidebar__element__wrapper flex flex-col">
                <Sidebar_element icon={<IoIosBody/>}>User Management</Sidebar_element>
                <Sidebar_element icon={<IoIosGlobe/>} onClick= {gotoSiteManagement}> Site Management</Sidebar_element>
                <Sidebar_element icon={<IoIosDesktop/>} >Administration</Sidebar_element>
                <Sidebar_element icon={empty_icon}> Very long element with a lot of words number one </Sidebar_element>
                <Sidebar_element icon={empty_icon}> Very long element with a lot of words number two </Sidebar_element>
                <Sidebar_element icon={empty_icon}> Very long element with a lot of words number three </Sidebar_element>
                <Sidebar_element icon={empty_icon}> Very long element with a lot of words number four </Sidebar_element>
            </div>
        <div className="Divider border-b-2 border-[--nukasa_champagne] mt-96"></div>
        <div className="Sidebar__footer flex flex-col relative bottom-0 ">
        <Sidebar_element>Help and shit</Sidebar_element>
        <Sidebar_element>Help and shit</Sidebar_element>
        <Sidebar_element>Help and shit</Sidebar_element>
        </div>
            </div>
            {/* <BlogForm className={`${pageState.siteManagement}`} />     */}
        </div>
    );
}