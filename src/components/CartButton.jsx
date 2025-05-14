import React, { useState } from "react";
import minus from "/icon-minus.svg";
import plus from "/icon-plus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { collection } from "./products";
import { useContext } from "react";
import { cartProvider } from "../context/CartContext";

const CartButton = () => {
  const [count, setCount] = useState(0);
  const {cartItems, setCartItems, isCartOpen, setIsCartOpen} = useContext(cartProvider)

  const handleCartItems = (event) => {
    event.stopPropagation()
    const total = collection.price * count
    let cartItem = { ...collection, quantity: count, total: total};
    setCartItems(prev => {
      const foundItem = prev.find(item => item.id === cartItem.id);

      if (foundItem) {
        return prev.map(item =>
          item.id === foundItem.id ? { ...item, quantity: count, total: total } : item
        );
      }
      return [...prev, cartItem];
    });
      if(!isCartOpen){
        setIsCartOpen(true)
      }
  };

  const increaseCount = () => setCount(prev => prev + 1);
  const decreaseCount = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
      return;
    }
  };
  console.log(cartItems)

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <div className=" w-full lg:w-[40%] flex items-center justify-between p-3 bg-[#F5F4FC] rounded-md">
        <button>
          <img src={minus} alt="" onClick={decreaseCount} />
        </button>
        <span>{count}</span>
        <button>
          <img src={plus} alt="" onClick={increaseCount} />
        </button>
      </div>
      <button
        className="font-medium justify-center flex gap-4 items-center p-4 w-full lg:w-[60%] bg-[#FF7D1A] rounded-xl "
        onClick={handleCartItems}
      >
        <AiOutlineShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
