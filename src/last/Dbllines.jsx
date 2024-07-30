import {  motion } from 'framer-motion'
import React from 'react'

const Dbllines = () => {
    const lines =

        [
            { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg', number: '2' },
            { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg', number: '5' },
            { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg', number: '8' },
            { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg', number: '10' },
            { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg', number: '2' },
            { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg', number: '5' },
            { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg", number: '4' },
            { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg', number: '3' },
            { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg', number: '4' }

         ,
  { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg', number: '2' },
  { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg', number: '5' },
  { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg', number: '8' },
  { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg', number: '10' },
  { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg', number: '2' },
  { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg', number: '5' },
  { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg", number: '4' },
  { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg', number: '3' },
  { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg', number: '4' }


        ]
        

        



    return (
        <>
        <div className=' bg-black overflow-hidden  select-none'>
        <motion.div initial={{x:"0"}} animate={{x: "-100%" }} transition={{ ease:'linear',duration:10,repeat:Infinity}}  className=' pt-10 pr-40 pb-10 bg-black flex items-center gap-10 justify-between h-10  '>
            
            {lines.map((elem, index) =>
                <img key={index} className=' h-10 w-[20vh]   bg-black' src={elem.url} />
                

            )}
            </motion.div>
            <motion.div initial={{x:"-100%", }} animate={{ x: "0%" }} transition={{ ease:'linear', duration:10,repeat:Infinity , }}   className=' pt-10 pr-40 pb-10 bg-black flex items-center gap-10 justify-between h-10  '>
            
            {lines.map((elem, index) =>
                <img key={index} className=' h-10 w-[20vh]   bg-black' src={elem.url} />
                

            )}
            </motion.div>
            
            </div>
            </>
    )
}

export default Dbllines