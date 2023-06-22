import React from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="w-screen min-h-[15%]  flex flex-row items-center justify-between">
      <div className="w-[20%] h-full   flex flex-row items-center justify-center">
        <h1 className="text-black text-[16px] font-semibold">Logo</h1>
      </div>
      <div className="w-[50%] h-full px-[20px]  flex flex-row items-center justify-around">
        <h1 className="text-black text-[16px] font-semibold">Home</h1>
        <h1 className="text-black text-[16px] font-semibold">Shop</h1>
        <h1 className="text-black text-[16px] font-semibold">Contact Us</h1>
        <BsPerson size={20} />
        <div className="w-[20%] h-[45%] rounded-[15px] bg-black flex flex-row items-center justify-center">
          <AiOutlineShoppingCart size={20} color="white" />

          <h1 className="text-white text-sm font-medium ml-3">Cart</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
