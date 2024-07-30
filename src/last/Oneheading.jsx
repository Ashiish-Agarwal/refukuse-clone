import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";



const Oneheading = ({width ,btn ,desc ,head ,hover}) => {
    return (
        <div className= {`top-0 h-[60vh] rounded-lg bg-zinc-800 pt-10 pl-2 text-white  ${width}  ${hover===true&& 'hover:bg-purple-700' } `}>
            <div className=' w-full '>
                <div className='text-sm flex justify-between font-semibold'><h5>one heading</h5>
                    <FaLongArrowAltRight /> </div>
                    <div><h3 className='pt-10'>watever heading</h3></div>
            </div>
            <div className=' pt-[25vh]'>
                      {head}
                <div className=' pt-10 '>
                  {btn}
                    {desc}
                    </div>
        </div></div>
    )
}

export default Oneheading