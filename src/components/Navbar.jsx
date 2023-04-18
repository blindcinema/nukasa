export function Navbar(props) {
    return (
        <div className="Header min-w-full bg-white md:h-20 flex items-center">
        <h1 className="site_logo m-0 py-5 text-5xl align-middle mr-10">NUKASA</h1>
        <div className="spacer w-3/5"></div>
        <div className="navbar flex items-center w-max h-full">

          <ul className= "navlist text-lg inline-flex p-1 flex-row place-content-between mr-10">
            
            <li className="group pr-20 relative">Education
              <div className="hidden group-hover:flex flex-col bg-white absolute flex-wrap divide-y divide-solid divide-black w-min">

              </div>
            </li>
            
            <li className="group pr-20 relative">Glossary
              <div className="hidden group-hover:flex flex-col bg-white absolute flex-wrap divide-y divide-solid divide-black w-min">
                  <a className="" href="#">ASDF</a>
                  <a className="" href="#">YE</a>
                  <a className="" href="#">ALONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                </div>
              </li>
              
            <li className="group pr-20 relative">Lessons
              <div className="hidden group-hover:flex flex-col bg-white absolute flex-wrap divide-y divide-solid divide-black w-min">
                  <a class="" href="#">SWAG</a>
                  <a class="" href="#">ASDF</a>
                  <a class="" href="#">LONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                  <a class="" href="#">LONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                  <a class="" href="#">LONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                  <a class="" href="#">LONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                  <a class="" href="#">LONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                  <a class="" href="#">LONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>

                </div>
            </li>

            <li className="group pr-20 relative">Blogs
              <div className="hidden group-hover:flex flex-col bg-white absolute flex-wrap divide-y divide-solid divide-black w-min">
                  <a class="" href="#">ASDF</a>
                  <a class="" href="#">ASDF</a>
                  <a class="" href="#">ASDF</a>
                  <a class="" href="#">LONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                  <a class="" href="#">LONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                </div>
            </li>

            <li className="group pr-20 relative">Search
              <div className="hidden group-hover:flex flex-col bg-white absolute flex-wrap divide-y divide-solid divide-black w-min">
                  <a class="" href="#">ASDF</a>
                  <a class="" href="#">ASDF</a>
                  <a class="" href="#">ASDF</a>
                  <a class="" href="#">LONG ASS PIECE OF TEXT LMAO THIS IS LOOOONG</a>
                </div>
            </li>

          </ul>
        </div>
        
      </div>
    )
}