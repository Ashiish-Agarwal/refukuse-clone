import React from 'react'
import Button from './Button'

const Navbaar = () => {


  
  return (
    <div className=' max-w-screen-xl mx-auto pb-6 pt-8 gap-16 bg-black flex border-solid border-b-[1px] border-x-zinc-700'>
        
   
    <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Loading..." />
   

   <div className='text-white flex items-center gap-10 font-[satoshi] uppercase '>{["home","Work","about","","News"].map((elem,index)=><a key={index} className=' flex items-center'
   
   href=""> {index===1 && (
   <span  style={{boxShadow: "0 0 1em #00ff19"}}
    className=' inline-block h-2 w-2 bg-green-500  rounded-full '></span>)}
     { index===3 &&(<span className=' h-5 w-[2px] bg-zinc-700'></span>)}
   {elem}
   
   </a>)}

   <div className=' pl-[82vh]'>
   <Button/>

   </div>
   

  
   </div>
    </div>
  )
}

export default Navbaar