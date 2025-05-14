import React from "react";
import { collection } from "./products";
import CartButton from "./CartButton";
import { useContext } from "react";
import { cartProvider } from "../context/CartContext";

const ProductDescription = () => {
  const {lightbox} = useContext(cartProvider)
  return (
    <div className={lightbox? "w-[90vw] mx-auto xl:w-[40%] 2xl:w-[40%] opacity-1":"w-[90vw] mx-auto xl:w-[40%] 2xl:w-[40%]"}>
      <h4 className="mb-2 text-[#666D73]">SNEAKER COMPANY</h4>
      <h1 className=" tracking-wide font-bold text-3xl 2xl:text-5xl ">{collection.collectionName}</h1>
      <h2 className="tracking-wide font-bold text-3xl 2xl:text-5xl mb-6">Sneakers</h2>
      <p className="text-sm text-[#666D73] mb-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <p className="mb-2 flex items-center font-bold text-2xl">${collection.price}.00 <span className=" ml-4 text-sm bg-black text-white px-2 rounded-[3px]">{collection.discount}</span></p>
      <p className="mb-4 text-[#666D73] line-through">{collection.formerPrice}</p>
      <CartButton />

    </div>
  );
};

export default ProductDescription;
