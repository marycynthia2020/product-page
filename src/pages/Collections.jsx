import React, { useState } from 'react'
import Image from '../components/Image'
import ProductDescription from '../components/ProductDescription'
import Lightbox from '../components/Lightbox'
import Cart from '../components/Cart'

const Collections = () => {
  const [lightbox, setLightbox] = useState(false)
  const handleLightbox = ()=> setLightbox(true)

  return (
    <div className=' w-full lg:w-[80vw] 2xl:w-[60vw] max-w-[1440px] mx-auto '>
       <div className=' 
        flex flex-col lg:flex-row lg:items-center gap-16 lg:justify-between'>
            <Image handleLightbox={handleLightbox}/>
            <ProductDescription />
       </div>
       {lightbox && <Lightbox setLightbox={setLightbox} />}
         
    </div>
  )
}

export default Collections