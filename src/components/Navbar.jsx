import { IoMdSearch } from "react-icons/io";

export function Navbar(props) {
    return (
      <div className="Header min-w-full bg-white h-20 flex items-center">
          <a className="site_logo min-w-max" href="#">
            <div className=" ml-0 py-5  mr-10 flex items-center">
                <img src="./svg/LG - Para.svg" className="logo__image h-20 ml-2 mr-2 scale-[0.8] font-nukasa_logo" />
                <img src="./svg/Nukasa Text.svg" className=" logo__text h-10 min-h-10 drop-shadow-lg" />  
            </div>  
            </a>

        <div className="spacer w-3/5"></div>

        <div className="navbar flex items-center w-max h-full">

          <ul className= "navlist text-lg inline-flex p-1 flex-row place-content-between mr-10 text-[#9B4C44] font-[600] drop-shadow-lg">
            
            <li className="group pr-20 relative">
              <a className="hover:text-[#6A3630]" href="#">Home</a>
            </li>

            
            <li className="group pr-20 relative"><div className="hover:text-[#6A3630]">Education</div>
              <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col pl-2 pr-2 bg-white absolute flex-wrap ">
                <a className="mt-2 hover:text-[#6A3630]" href="#">Sound Design</a>
                <a className="mt-2 hover:text-[#6A3630]" href="#">Arrangement</a>
                <a className="mt-2 hover:text-[#6A3630]" href="#">Theory/Songwriting</a>
                <a className="mt-2 hover:text-[#6A3630]" href="#">Lifestyle & Wellbeing</a>
                <a className="mt-2 hover:text-[#6A3630]" href="#">Mixing</a>
                <a className="mt-2 hover:text-[#6A3630]" href="#">Mastering</a>
              </div>
            </li>
            
            <li className="group pr-20 relative"><div className="hover:text-[#6A3630]">Glossary</div>
              <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col pl-2 pr-2 bg-white absolute flex-wrap">
                  <a className="mt-2 hover:text-[#6A3630]" href="#">ASDF</a>
                  <a className="mt-2 hover:text-[#6A3630]" href="#">YE</a>
                  <a className="mt-2 hover:text-[#6A3630]" href="#">ALONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                </div>
              </li>
              
            <li className="group pr-20 relative"><div className="hover:text-[#6A3630]">Lessons</div>
              <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col pl-2 pr-2 bg-white absolute flex-wrap">
                </div>
            </li>

            <li className="group pr-20 relative"><div className="hover:text-[#6A3630]">Blogs</div>
              <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col pl-2 pr-2 bg-white absolute flex-wrap ">
              <a className="mt-2 hover:text-[#6A3630]" href="#">ASDF</a>
                  <a className="mt-2 hover:text-[#6A3630]" href="#">YE</a>
                  <a className="mt-2 hover:text-[#6A3630]" href="#">ALONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                  <a className="mt-2 hover:text-[#6A3630]" href="#">ASDF</a>
                  <a className="mt-2 hover:text-[#6A3630]" href="#">YE</a>
                  <a className="mt-2 hover:text-[#6A3630]" href="#">ALONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                </div>
            </li>

            <li className="group pr-0 relative flex items-center"><IoMdSearch size={"2rem"} className="font-extralight hover:text-[#6A3630]" />
              <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col bg-white absolute flex-wrap">
                </div>
            </li>

          </ul>
        </div>
        
      </div>
    )
}