import React from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const MobileMenu = ({setIsMobile}) => {
    const toggleMobileMenu = () => setIsMobile(prev => !prev)
  return (
    <div className="mobileMenu shadow-xl" >
      <IoClose className="text-2xl text-[#666D73]" onClick={toggleMobileMenu}/>
      <NavLink to="/">
        {({ isActive }) => (
          <span className={isActive ? "active" : ""}>Collections</span>
        )}
      </NavLink>
      <NavLink to="/men">Men</NavLink>
      <NavLink to="/women">Women</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default MobileMenu;
