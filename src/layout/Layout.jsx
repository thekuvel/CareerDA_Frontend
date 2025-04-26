import { Outlet } from "react-router-dom"
import Header from "../components/header/Header.jsx"
import Sidebar from "../components/sidebar/Sidebar.jsx"

function Layout(){
    return(
        <div className="m-[10px] mt-[20px] md:grid grid-cols-12 gap-[50px]">

            <Header/>

            {/* <Sidebar/> */}

            <div className="col-start-2 col-span-10">
            <Outlet/>
            </div>

        </div>
    )
}

export default Layout