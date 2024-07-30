import React from 'react'

const Frammer = () => {
    const images = [
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg', number: '2' },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg', number: '5' },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg', number: '8' },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg', number: '10' },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg', number: '2' },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg', number: '5' },
        { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg", number: '4' },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg', number: '3' },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg', number: '4' },
    ]




    const image2 = [
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275a4f001b08a4e28bc_weglot.svg', num: 10 },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg', num: 15 },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg', num: 20 },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg', num: 1 },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg', num: 2 },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg', num: 5 },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg', num: 12 },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg', num: 3 },
        { url: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg', num: 5 }]
    return (
        < >
            <div className='flex flex-col gap-10  bg-black'>



                <div className=' border-zinc-600   border-b-2 border-r-2 border-t-2 w-full p-2 flex gap-16 overflow-hidden '>
                  
                    {images.map((elem, item) =>
                      <div key={item} className='flex items-center justify-between gap-5 w-40 '>
                      <img src={elem.url} alt="loading" />
                      <h1 className=' text-white'>{elem.number}</h1>
                      </div>

                    



                    )}</div>
                    

            </div>
        </>
    )
}

export default Frammer