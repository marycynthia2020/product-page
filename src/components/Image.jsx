import React, { useState } from 'react'
import { collection } from './products'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Image = ({handleLightbox}) => {
    const [src, setSrc] = useState("/image-product-1.jpg")

    const handleImageDisplay = (id) => {
        collection.products.map(productImage => {
            if(productImage.id === id){
                setSrc(productImage.bigImage)
            }
        })
    }

    const handlePreviousDisplay = ()=>{
            collection.products.map((productImage, index) => {
                    if(src === productImage.bigImage){
                         let previous = index - 1
                        setSrc(collection.products[previous].bigImage)
                    }
            })
        }

        const handleNextDisplay = () =>{
            collection.products.map((productImage, index) => {
                    if(src === productImage.bigImage){
                        let next = index + 1
                        setSrc(collection.products[next].bigImage)
                    }
            })
        }

  return (
    <div className='w-full xl:w-[40%] 2xl:w-[40%]'>
        <div className='max-w-[100%] mb-4 relative'>
            <img src={src} alt="" className='w-full md:rounded-md' onClick={handleLightbox}/>
           <div className='bg-white p-3 rounded-full w-fit absolute left-3 top-[40%] lg:hidden ' onClick = {handlePreviousDisplay}> <GrFormPrevious className='text-2xl font-bold text-black' /></div>
          <div  className='bg-white p-3 rounded-full w-fit absolute right-3 top-[40%] lg:hidden' onClick={handleNextDisplay}><MdNavigateNext className='text-2xl font-bold text-black' /></div>
        </div>
        <div className='max-w-[100%] hidden lg:grid grid-cols-4 gap-4 rounded-md'>
            {collection.products.map(product => (
              <div className='  w-full '> <img key={product.id} src={product.thumbnail} alt={product.name} className=' w-full  rounded-md hover:opacity-50 hover:border-2 hover:border-[#FF7D1A]' onClick={() => handleImageDisplay(product.id)}/></div>
            ))}
        </div>
    </div>
  )
}

export default Image