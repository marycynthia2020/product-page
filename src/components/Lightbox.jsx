import React, { useContext, useState } from 'react'
import { collection } from './products'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { cartProvider } from '../context/CartContext';

const Lightbox = () => {
    const [src, setSrc] = useState("/image-product-1.jpg")
    const {setLightbox} = useContext(cartProvider)

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

        const handleCloseLightbox = () => setLightbox(false)
        

  return (
    
        <div className='hidden lg:block w-2/5 transform absolute top-[42%] left-[50%] z-[999] cursor-pointer'>
        <div className='max-w-[100%] mb-4 relative'>
            <img src={src} alt="" className='w-full md:rounded-md'/>
           <div className='bg-white p-3 rounded-full w-fit absolute -left-5 top-[40%]  ' onClick = {handlePreviousDisplay}> <GrFormPrevious className='text-3xl font-bold text-black hover:text-[#FF7D1A]' /></div>
          <div  className='bg-white p-3 rounded-full w-fit absolute -right-5 top-[40%] shadow-2xl' onClick={handleNextDisplay}><MdNavigateNext className='text-3xl font-bold text-black hover:text-[#FF7D1A]' /></div>
        </div>
        <div className='max-w-[80%] hidden lg:grid grid-cols-4 gap-4 rounded-md mx-auto'>
            {collection.products.map(product => (
              <div className='  w-full '> <img key={product.id} src={product.thumbnail} alt={product.name} className={src===product.bigImage? 'opacity-50  w-full  rounded-md border-2 border-[#FF7D1A]':' w-full  rounded-md hover:opacity-50 hover:border-2 hover:border-[#FF7D1A]'  } onClick={() => handleImageDisplay(product.id)}/></div>
            ))}
        </div>
        <IoClose  className='hover:text-[#FF7D1A] text-white  text-3xl absolute -top-12 right-0' onClick={handleCloseLightbox}/>
    </div>

  )
}

export default Lightbox