import { Outlet } from "react-router-dom"
import NavBar from "../Components/Shared/NavBar/NavBar"
import Footer from "../Components/Shared/Footer"

const Main = () => {
  return (
    <>
      <NavBar />
      {/* <div className="pt-28 pb-20">
      <Outlet/>
      </div> */}
      <div className='min-h-[calc(100vh-68px)] pt-24 pb-10'>
      <Outlet></Outlet>
      </div>
      <Footer/>
    </>
  )
}

export default Main