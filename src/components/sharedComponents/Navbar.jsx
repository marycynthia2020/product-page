import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import avatar from "/image-avatar.png"
import logo from "/logo.svg"
import { cartProvider } from "../../context/CartContext";
import Cart from "../Cart";

const Navbar = ({setIsMobile}) => {
    const toggleMobileMenu = ()=> setIsMobile(prev => !prev)
    const {setIsCartOpen} = useContext(cartProvider)
    const toggleShoppingCart = ()=> setIsCartOpen(prev => !prev)
    const {isCartOpen, cartItems} = useContext(cartProvider)

    let quantity = 0

    cartItems.map(item => {
      quantity += item.quantity
    })

  return (
    <nav className="border border-red-600 max-w-[1440px] lg:px-20 relative  lg:mb-16 py-8  md:border-b  cursor-pointer w-[90vw] lg:w-full mx-auto flex items-center justify-between text-[#666D73]">
      <div className="flex gap-4 md:gap-8 items-center">
        <IoMdMenu className="lg:hidden text-2xl" onClick={toggleMobileMenu}/>
        <img src={logo} width={130} height={130}/>
        <div className=" hidden lg:flex gap-4 md:gap-8 items-center">
            <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "active" : ""}>Collections</span>
          )}
        </NavLink>
        <NavLink to="/men"  >Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-8 ">
        <div className="relative"><AiOutlineShoppingCart className="text-2xl" onClick={toggleShoppingCart}/>
          {quantity >0? <span className="bg-[#FF7D1A] px-[10px] text-[10px] rounded-xl text-white absolute -top-3 left-2">{quantity}</span>: null}
        </div>
        <div className="h-8 w-8 rounded-full" ><img src={avatar} className="w-full h-full"  /></div>
          
      </div>
        {isCartOpen && <Cart />}
    </nav>
  );
z};

export default Navbar;
