import React from "react";

function Footer() {
  return (
    <div className="w-full min-h-[30vh] flex flex-row items-center justify-between px-12 bg-black">
      <h1 className="text-5xl  text-white font-museo tracking-wider">
        Yolo
      </h1>
      <div className="w-[25%] h-full flex flex-row items-start justify-between ">
        <div className="w-[50%] h-full flex flex-col items-start justify-around">
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Home
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Shop
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Contact Us
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Terms & Conditions
          </h1>
        </div>
        <div className="w-[50%] h-[70%] flex flex-col items-start justify-around mt-0">
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Intsagram
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Whatsapp
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Email
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
