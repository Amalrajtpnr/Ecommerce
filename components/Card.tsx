import React from "react";
import Image from "next/image";

function Card() {
  return (
    <div className="w-[260px] h-[485px] flex flex-col items-start justify-start ">
      <Image
        width={150}
        height={120}
        className="w-full "
        src="/Rectangle 10.svg"
        alt=""
      />
      <h1 className="text-[18px]  text-black font-[700]">Striped Pants</h1>
      <h1 className="text-[14px]  text-black font-normal ">
        Striped Pants black and rose color
      </h1>
      <div className="w-full h-[10%]  flex flex-row items-center justify-start">
        <h1 className="text-[13px]  text-black font-[600]  ">Rs 399</h1>
        <h1 className="font-medium text-[11px] text-[#00000094] line-through ml-6 ">
          Rs 399
        </h1>
        <h1 className="font-semibold text-[11px] text-[#FF0000]  ml-6 ">
          33% off
        </h1>
      </div>
    </div>
  );
}

export default Card;
