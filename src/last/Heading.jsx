import React from 'react'
import Oneheading from './Oneheading'


const Heading = () => {
  return (
    <div className='  flex justify-center w-full gap-3 uppercase bg-black items-center'> 
            
            <Oneheading width={"basis-1/3"}desc={ <p className='w-full text-sm text-nowrap pt-[8vh] font-light '>Lorem ipsum dolor sit amet !</p>}  />
               
                <Oneheading width={"basis-1/2"} btn={<button className=' text-lg  font-semibold rounded-full border-solid text-zinc-100 border-red-100 border-2 p-1'> contact us</button>} head={<h1 className='text-5xl font-semibold'>start project</h1>} hover={true}/>

    </div>
  )
}

export default Heading