import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import avatar from "/image-avatar.png";
import logo from "/logo.svg";
import { cartProvider } from "../../context/CartContext";

const Navbar = ({ setIsMobile }) => {
  const { setIsCartOpen, cartItems } = useContext(cartProvider);
  const toggleMobileMenu = () => setIsMobile(prev => !prev);
  const toggleShoppingCart = () => setIsCartOpen(prev => !prev);

  let quantity = 0;

  cartItems.map(item => {
    quantity += item.quantity;
  });

  
  const navLinks = [
    { name: "Collections", to: "/" },
    { name: "Men", to: "/men" },
    { name: "Women", to: "/women" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ]

  return (
    <nav className="max-w-[1440px] lg:px-20 relative  lg:mb-16 py-4 2xl:py-8  md:border-b  cursor-pointer w-[90vw] lg:w-full mx-auto flex items-center justify-between text-[#666D73]">
      <div className="flex gap-4 md:gap-8 items-center">
        <IoMdMenu className="lg:hidden text-2xl" onClick={toggleMobileMenu} />
        <img src={logo} width={130} height={130} />
        <div className=" hidden lg:flex gap-4 md:gap-8 items-center">
          {navLinks.map(link => (
            <NavLink to={link.to} className="relative" >
            {({ isActive }) => (
              <>
                <span className="hover:text-black">{link.name}</span>
                <span
                  className={
                    isActive ? "absolute top-[230%] 2xl:top-[290%]  h-1  inset-x-0 bg-orange-500" : "hidden h-1 w-full"
                  }
                />
              </>
            )}
          </NavLink>
          ))}
          
          {/* <NavLink to="/men">Men</NavLink>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink> */}
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-8 ">
        <div className="relative">
          <AiOutlineShoppingCart
            className="text-2xl"
            onClick={toggleShoppingCart}
          />
          {quantity > 0 ? (
            <span className="bg-[#FF7D1A] px-[10px] text-[10px] rounded-xl text-white absolute -top-3 left-2">
              {quantity}
            </span>
          ) : null}
        </div>
        <div className="h-8 w-8 lg:h-14 lg:w-14 rounded-full border-2 border-transparent hover:border-orange-500">
          <img src={avatar} className="w-full h-full" />
        </div>
      </div>
    </nav>
  );
  z;
};

export default Navbar;
