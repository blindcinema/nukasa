
import { useState, useRef, useEffect } from "react";
import { IoMdSearch,IoIosClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi"
import  NukasaTitleComponent  from "../../public/svg/Nukasa Text.svg"
import Link from "next/link";


export function Navbar(props) {

  const [searchState, setSearchState] = useState({display:"hidden", isToggled: true});
  const [navState, setNavState] = useState(true);
  const categories = [
    {name: "Education", slug: "education"},
    {name: "Lessons", slug: "lessons"},
  ]

  function handleNav(){
    setNavState(!navState);

  }
  function displaySearch() {
    if (searchState.isToggled === true) {
      setSearchState({display:"block",isToggled:!searchState.isToggled});
    } if (searchState.isToggled === false) {
      setSearchState({display:"hidden",isToggled:!searchState.isToggled});
    }
  }
  function handleSubmit() {
    alert("This eventually leads to a list with searched stuff and filters")
  }
  const [stickyState, setStickyState] = useState("");
  const headerRef = useRef("headerRef");
  
/*   useEffect(()=> {
    const element = document.getElementById("header");
    let fixedTop = headerRef.current.offsetTop;
    const fixedHeader = () => {
      if (window.scrollY > fixedTop) {
      
        setStickyState("fixed");
      } else {
        setStickyState("");
        
      }
    }
    window.addEventListener("scroll", fixedHeader);
    },[headerRef]) */

    return (
      
      <div className={`Header min-w-full bg-white h-16 shadow-md top-0 flex items-center z-20 box-border fixed  `} id="header" ref={headerRef}>
          <div className="absolute text-[#6A3630] right-0 sm:hidden" onClick={handleNav}>
            {!navState ? <IoIosClose size={42} /> : <HiOutlineMenu size={42} />}
          </div>
          <Link className="site_logo min-w-max sm:mr-4 md:mr-0" href="#">
            <div className=" ml-0  flex items-center">
              <img src="./svg/LG - Para.svg" className="logo__image us:scale-100 us:h-16 sm:h-20 sm:ml-2 mr-2 sm:scale-[0.8]" />
              <NukasaTitleComponent className=" logo__text us:h-5 md:h-10 min-h-10 drop-shadow-lg sm:flex" />
               
            </div>  
            </Link>
        <div className="spacer w-3/5"></div>
        <div className={ navState ? " fixed left-[-100%]" : "mobile__nav us:block fixed top-0 left-0 min-h-full bg-white z-10 ease-in-out duration-100 flex" }>
        <ul className= "navlist text-lg text-[#9B4C44] font-[600] ">
            
            <li className="pt-8 drop-shadow-lg">
              <Link className="hover:text-[#6A3630]" href="#">Home</Link>
            </li>
  
            <li className="pt-8 drop-shadow-lg">
              <Link className="hover:text-[#6A3630]" href="#">Education</Link>
            </li>
            
            <li className="pt-8 drop-shadow-lg">
              <Link className="hover:text-[#6A3630]" href="#">Glossary</Link>
              </li>
              
            <li className="pt-8 drop-shadow-lg">
              <Link className="hover:text-[#6A3630]" href="#">Lessons</Link>
            </li>

            <li className="pt-8 drop-shadow-lg">
              <Link className="hover:text-[#6A3630]" href="#">Blogs</Link>
            </li>

            <li className="pt-8 shadow-sm">
              <div className={`navlist__dropdown block flex-col bg-white flex-wrap`}>
                <form method="GET" onSubmit={handleSubmit}>
                  <input type="text" id="searchbox_mobile" placeholder="Search..." className=" text-sm text-black text-serif"/>
                </form>
                </div>
            </li>

          </ul>
        </div>
        <div className="navbar hidden sm:flex items-center w-max h-full">

          <ul className= "navlist text-lg inline-flex p-1 flex-row place-content-between text-[#9B4C44] font-[600] drop-shadow-lg sm:text-sm md:text-lg">
            
            <li className="group pr-5 relative xl:pr-20">
              <a className="hover:text-[#6A3630]" href="#">Home</a>
            </li>

            
            <li className="group pr-5 relative xl:pr-20">
              <div className="hover:text-[#6A3630]">Education</div>
              <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col pl-2 pr-2 bg-white absolute flex-wrap">
                <Link className="mt-2 hover:text-[#6A3630]" href="#">Sound Design</Link>
                <Link className="mt-2 hover:text-[#6A3630]" href="#">Arrangement</Link>
                <Link className="mt-2 hover:text-[#6A3630]" href="#">Theory/Songwriting</Link>
                <Link className="mt-2 hover:text-[#6A3630]" href="#">Lifestyle & Wellbeing</Link>
                <Link className="mt-2 hover:text-[#6A3630]" href="#">Mixing</Link>
                <Link className="mt-2 hover:text-[#6A3630]" href="#">Mastering</Link>
              </div>
            </li>
            
            <li className="group pr-5 relative xl:pr-20">
              <div className="hover:text-[#6A3630]">Glossary</div>
              <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col pl-2 pr-2 bg-white absolute flex-wrap">
                </div>
              </li>
              
            <li className="group pr-5 relative xl:pr-20">
              <div className="hover:text-[#6A3630]">Lessons</div>
              <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col pl-2 pr-2 bg-white absolute flex-wrap">
                </div>
            </li>

            <li className="group pr-4 relative lg:pr-4 xl:pr-20">
              <div className="hover:text-[#6A3630]">Blogs</div>
              <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col pl-2 pr-2 bg-white absolute flex-wrap ">
              <a className="mt-2 hover:text-[#6A3630]" href="#">ASDF</a>
                  <Link className="mt-2 hover:text-[#6A3630]" href="#">YE</Link>
                  <Link className="mt-2 hover:text-[#6A3630]" href="#">ALONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</Link>
                  <Link className="mt-2 hover:text-[#6A3630]" href="#">ASDF</Link>
                  <Link className="mt-2 hover:text-[#6A3630]" href="#">YE</Link>
                  <Link className="mt-2 hover:text-[#6A3630]" href="#">ALONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</Link>
                </div>
            </li>

            <li className="group pr-2 relative lg:pr-20 items-center flex ml-4">
              <div className="font-extralight hover:text-[#6A3630] cursor-pointer" onClick={displaySearch} >
                <IoMdSearch className="md:w-8 h-8 sm:h-6 sm:w-6" />
              </div>
              <div className={`navlist__dropdown shadow-lg ${searchState.display} flex-col bg-white absolute top-12 right-10 flex-wrap `}>
                <form method="GET" onSubmit={handleSubmit}>
                  <input type="text" id="searchbox" placeholder="Search..." className=" text-sm text-black text-serif" onBlur={displaySearch}/>
                </form>
                </div>
            </li>
            <li className="Login pr-2 relative lg:pr-10 items-center flex ml-0">
              <div className="font-extralight hover:text-[#6A3630] cursor-pointer">
                <FaUser className="md:w-6 h-6 sm:h-6 sm:w-6" onClick={props.onLogin}/>
              </div>
            </li>

          </ul>
        </div>
        
      </div>
    )
}