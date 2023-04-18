import { Navbar } from "@/components/Navbar";

export default function Dashboard(props) {

    return  (
      <div className="wrapper min-h-screen  bg-[#F6E2C9] ">

        <div className="nav-wrapper sticky top-0 shadow-sm shadow-stone-500">

          <Navbar />
          <div className="stripe bg-[#29294E] h-10 w-full flex items-center text-2xl leading-10 ">
            <div className="stripe__spacer w-2/12"></div>
            <div className="text-white mr-2 drop-shadow-lg" >TAKE IT EASY; </div> <div className="text-[#F6E2C9] drop-shadow-lg"> BUT TAKE IT</div>
          </div>

        </div>

      </div>
    )
}