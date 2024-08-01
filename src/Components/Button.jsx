import React from 'react'
import { IoIosReturnRight } from "react-icons/io"

const Button = ({Btn='start'}) => {
  return (
    <>
    <div className=' w-fit h-full'>
    <div className=" bg-zinc-50 h-8 w-24 rounded-full flex items-center   justify-between  text-black  ">
       <h1 className=' truncate text-[15px] tracking-tightertext-black font-semibold p-2 '>{Btn}</h1>
      <div>
      <IoIosReturnRight />
        
        </div>
        </div>
        </div></>

  )
}

export default Button