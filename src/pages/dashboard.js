import { Navbar } from "@/components/Navbar";

export default function Dashboard(props) {

    return  (
      <div className="wrapper min-h-screen bg-[#F6E2C9]" >
        <Navbar></Navbar>
        <div className="stripe bg-[#29294E] h-10 w-full flex items-center text-2xl leading-10">
          <div className="stripe__spacer w-2/12"></div>
          <div className="text-white mr-2" >TAKE IT EASY; </div> <div className="text-[#F6E2C9]"> BUT TAKE IT</div>
        </div>

      </div>
    )
}