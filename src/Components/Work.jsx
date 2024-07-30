import React, { useState } from 'react'
import { IoMdReturnRight } from 'react-icons/io'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Work = () => {
  const [images, setimages] = useState([
    { url: 'https://plus.unsplash.com/premium_photo-1671580681707-e279b938b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nfGVufDB8fDB8fHww', top: "50%", left: "50%", value: false },
    { url: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D', top: "45%", left: "42%", value: false },
    { url: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D', top: "47%", left: "46%", value: false },
    { url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D', top: "48%", left: "45%", value: false },
    { url: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D', top: "43%", left: "49%", value: false },
    { url: 'https://images.unsplash.com/photo-1519326844852-704caea5679e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D', top: "52%", left: "53%", value: false },



  ])



  const { scrollYProgress } = useScroll()

  scrollYProgress.on('change',(data)=>{
    function scroll (arr) {
      setimages(item=>
      item.map((elem,index)=> arr.indexOf(index)===  -1 
    ? {...elem, value:false} 
    : {...elem, value:true} ))

    }
  
  
   switch (Math.floor(data*100)) {
    case 1:
       scroll([])
      break;
   
      case 2:
        scroll([1])
        break;
      case 3:
          scroll([1,2])
          break;
      case 4:
      case 5:
          scroll([1,2,3])
          break;
      case 7: 
      case 8:
       
          scroll([1,2,3,4])
          break;
      case 9:
      case 10:
          scroll([1,2,3,4,5])
          break;
      case 11 :
        scroll([1,2,3,4,5,6])
        break;
         
   }})

 
  

  



    
 
   

return (
    <>
      <div className=' w-full flex items-center justify-center bg-black '>


        <h1 className='relative uppercase text-white font-[satoshi] text-[60vh] tracking-tighter bg-black '>Work</h1>
        <div className='  top-0 '>

          {images.map((items, index) => items.value === true &&
            <img key={index} className='  absolute rounded-md h-[26vh] w-[26vh]  bg-zinc-100 ' src={items.url} alt="" style={{ top: items.top, left: items.left }} />

          )}



        </div>


      </div>
      </>
  )
}

export default Work