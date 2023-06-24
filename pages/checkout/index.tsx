import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";

function Checkout() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className="w-full min-h-[85%] flex flex-row items-center justify-center overflow-y-scroll scrollbar-hide">
        <div className="w-[60%] h-full flex flex-col items-start justify-start  overflow-y-scroll scrollbar-hide ">
          <h1 className="text-[22px] text-black font-semibold ">
            Delivery Address
          </h1>
          <div className="w-full h-[45%] flex flex-row items-center justify-start ">
            <div className="w-[30%] h-[90%] rounded-[20px] border border-gray-400  flex flex-col items-center justify-center ">
              <MdHome size={40} color="grey" />
              <h1 className="text-[15px] text-black font-normal">
                Athul vishnu
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">
                Karamel Vellur (PO) Payyanur
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">670307</h1>{" "}
              <h1 className="text-[15px] text-black font-normal">9876543210</h1>{" "}
            </div>
            <div className="w-[30%] h-[90%] rounded-[20px] border border-gray-400   flex flex-col items-center justify-center ml-8">
              <BsBuildingsFill size={40} color="grey" />
              <h1 className="text-[15px] text-black font-normal">
                Athul vishnu
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">
                Karamel Vellur (PO) Payyanur
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">670307</h1>{" "}
              <h1 className="text-[15px] text-black font-normal">9876543210</h1>{" "}
            </div>
          </div>
          <div className="w-[65%] h-[10%] flex flex-row items-center justify-between border border-black rounded-[20px] p-[20px] ">
            <h1 className="text-[18px] text-black font-medium">
              Add a new address
            </h1>{" "}
            <LuPlus
              onClick={() => {
                setIsActive(!false);
              }}
              size={30}
            />
            {isActive && (
              <div className="min-h-[500px] w-[38%] bg-black fixed top-[500px] left-[115px] overflow-y-scroll ">
                cdjkc
              </div>
            )}
          </div>
        </div>
        <div className="w-[26%] h-full flex flex-col items-start justify-start  border ">
          <div className="w-[100%] h-[80%] rounded-[15px] border border-gray-400  flex flex-col items-start justify-around pl-[70px] p-[30px] ">
            <h1 className="text-[22px] text-black font-semibold">
              Price Details
            </h1>

            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>

            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">
                Net Amount
              </h1>
              <h1 className="text-[15px] text-black font-normal ">₹4000</h1>
            </div>

            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Delivery</h1>
              <h1 className="text-[15px] text-black font-normal ">₹50</h1>
            </div>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>

            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Total</h1>
              <h1 className="text-[15px] text-black font-normal ">₹3500</h1>
            </div>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>
            <h1 className="text-[15px] text-black font-normal ">
              You saved 500 on this order
            </h1>
            <div className="w-[60%] h-[10%] bg-black rounded-[10px] flex flex-row items-center justify-center mt-8 ml-8">
              <AiOutlineShoppingCart size={20} color="white" />

              <h1 className="text-white font-semibold text-[14px] ml-3">
                Proceed to Checkout
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
