import React, { useContext, useState } from 'react'
import Image from '../components/Image'
import ProductDescription from '../components/ProductDescription'
import Lightbox from '../components/Lightbox'
import { cartProvider } from '../context/CartContext'

const Collections = () => {
  const {lightbox, setLightbox} = useContext(cartProvider)
  const handleLightbox = ()=> setLightbox(true)

  return (
    <div className='relative w-full lg:w-[85vw] lg:px-20 2xl:w-[70vw] max-w-[1440px] mx-auto'>
       <div className=' 
        flex flex-col lg:flex-row lg:items-center gap-16 lg:justify-between '>
            <Image handleLightbox={handleLightbox}/>
            <ProductDescription />
       </div>
       {lightbox && <Lightbox />}
         
    </div>
  )
}

export default Collections