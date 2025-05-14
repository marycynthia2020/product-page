import React, { createContext, useState } from 'react'

export const cartProvider = createContext()

const CartContext = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [lightbox, setLightbox] = useState(false)

  return (
   <cartProvider.Provider value={{cartItems, setCartItems, isCartOpen, setIsCartOpen, lightbox, setLightbox}}>{children}</cartProvider.Provider>
  )
}

export default CartContext