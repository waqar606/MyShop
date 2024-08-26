import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container pt-8 pb-4">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8 ">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/images/hero__1.webp"
            alt=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 top-[0%] translate-y-[40%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">
              100% Original Dry Fruites
            </p>
            <p className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Best Quality Dry Fruites
            </p>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <p className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
              $18.36
            </p>
            <div className="bg-accentsdark hover:bg-accents text-white rounded-full w-fit flex items-center gap-4 py-3 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight></BsArrowRight>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/images/hero__2.webp"
            alt=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 top-[0%] translate-y-[10%] sm:space-y-4">
            <p className="text-2xl sm:text-3xl font-bold">Best Yummy Pizza</p>
            <p className="text-xl  pt-4 text-gray-500">Starting At</p>

            <p className="font-medium text-red-600 text-2xl sm:text-4xl  pb-4">
              $25
            </p>
            <div className="bg-accentsdark hover:bg-accents text-white rounded-full w-fit flex items-center gap-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight></BsArrowRight>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/images/hero__3.webp"
            alt=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 top-[0%] translate-y-[10%] sm:space-y-4">
            <p className="text-2xl sm:text-3xl font-bold">Best Yummy Chips</p>
            <p className="text-xl  pt-4 text-gray-500">Starting At</p>

            <p className="font-medium text-red-600 text-2xl sm:text-4xl  pb-4">
              $10
            </p>
            <div className="bg-accentsdark hover:bg-accents text-white rounded-full w-fit flex items-center gap-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight></BsArrowRight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
