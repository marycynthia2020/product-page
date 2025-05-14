import React from 'react'
import { useContext } from 'react'
import { cartProvider } from '../context/CartContext'
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const {cartItems, setCartItems} = useContext(cartProvider)

  const deleteCartItems = (id)=> {
     setCartItems( cartItems.filter(item => item.id !== id))
  }

  return (
    <div className='mobile-cart md:top-[20%] lg:w-[385px] lg:top-[9%] lg:left-auto  bg-white shadow-2xl rounded-md lg:mr-left-20 text-[#666D73]'>
       <div className='font-semibold p-6 text-lg text-black'> <h3 >Cart</h3></div>
        <hr></hr>
       {cartItems.length >0? cartItems.map(item => (
        <div className='p-6 h-fit  min-h-[200px] '>
            <div className='flex items-center justify-between mb-6'>
          <div className=''><img src={item.products[0].thumbnail} alt="shoe" width={80} height={80} className='rounded-md hover:opacity-50 hover:border-2 hover:border-[#FF7D1A]' /></div>
          <div className=' flex flex-col gap-1'>
            <p>{item.collectionName} Sneakers</p>
            <p>${item.price}.00 x {item.quantity} <span className='font-semibold text-black'>{item.total}.00</span></p>
          </div>
          <RiDeleteBin6Line onClick={()=> deleteCartItems(item.id)} className='cursor-pointer' />
        </div>
        <button
                className="font-medium justify-center flex gap-4 items-center p-4 w-full text-black bg-[#FF7D1A] rounded-xl "
              >
               Checkout
              </button>

        </div>
      

       )):  <div className='p-6 h-fit  min-h-[200px]'><p  className='text-center'>Your cart is empty</p></div>}

    </div>
  )
}

export default Cart