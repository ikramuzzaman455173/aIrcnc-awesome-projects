import React from 'react'
import AvaterImg from "../../../assets/images/placeholder.jpg";
import UseAuth from '../../../Hooks/UseAuth';
const Avater = () => {
  const { user } = UseAuth()

  return (
    <>
      {/* {user ? <img src={user.photoURL} alt="profile img" className='w-[30px] h-[30px] rounded-full' /> : <img src={AvaterImg} alt="profile img" className='w-[30px] h-[30px] rounded-full' />} */}
      <img src={user?user.photoURL:AvaterImg} alt="profile img" className='w-[30px] h-[30px] rounded-full' />
    </>
  )
}

export default Avater