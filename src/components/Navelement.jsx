export function Navelement(props) {
    return (
        <li className="group pr-20 relative">
        <div className="hover:text-[#6A3630]">{props.category}</div>
        <div className="navlist__dropdown shadow-lg hidden group-hover:flex flex-col pl-2 pr-2 bg-white absolute flex-wrap ">
          <a className="mt-2 hover:text-[#6A3630]" href="#">{props.children}</a>
          <a className="mt-2 hover:text-[#6A3630]" href="#">Arrangement</a>
          <a className="mt-2 hover:text-[#6A3630]" href="#">Theory/Songwriting</a>
          <a className="mt-2 hover:text-[#6A3630]" href="#">Lifestyle & Wellbeing</a>
          <a className="mt-2 hover:text-[#6A3630]" href="#">Mixing</a>
          <a className="mt-2 hover:text-[#6A3630]" href="#">Mastering</a>
        </div>
      </li>

    );
}
// Make this work