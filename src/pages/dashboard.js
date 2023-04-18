import { Navbar } from "@/components/Navbar";

export default function Dashboard(props) {

    return  (
      <div className="wrapper min-h-screen bg-yellow-50" >
        <Navbar></Navbar>
        <div className="stripe bg-purple-700 h-10 w-full flex items-center text-2xl leading-10">
          <div className="stripe__spacer w-2/12"></div>
          <div className="text-yellow-50">TAKE IT EASY; BUT TAKE IT</div>
        </div>

      </div>
    )
}