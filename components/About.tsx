import React from "react";

function About() {
  return (
    <div className="w-[80%] min-h-[400px] flex flex-row items-center justify-between ">
      <div className="w-[45%] h-[100%] flex flex-col items-start justify-start">
        <h1 className="text-[1.7rem]  text-[#A96500] font-semibold tracking-wider">
          About Yolo
        </h1>
        <h1 className="text-[1.2rem]  text-black font-light mt-6 tracking-wider">
          YOLO is an ecommerce platform that specializes in providing custom
          printed design t-shirts. With YOLO, customers have the opportunity to
          create unique and personalized t-shirts by selecting from a wide range
          of design options or uploading their own artwork. The platform offers
          a user-friendly interface, making it easy for customers to customize
          their t-shirts with different colors, fonts, and graphics.
        </h1>
      </div>
      <div className="h-[80%] w-[50%]   flex flex-row items-start justify-start pl-[5%] box-border">
        <div
          style={{ backgroundImage: "url(/Rectangle 11.svg)" }}
          className="w-full h-full "
        >
          <img
            src="/Rectangle 11.svg"
            alt=""
            className="w-full h-full rounded-lg rotate-12"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
