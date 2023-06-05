import { Outlet } from "react-router-dom"
import NavBar from "../Components/Shared/NavBar/NavBar"

const Main = () => {
  return (
    <>
      <NavBar />
      {/* <div className="pt-28 pb-20">
      <Outlet/>
      </div> */}
      <div className='min-h-[calc(100vh-68px)] pt-24'>
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default Main
