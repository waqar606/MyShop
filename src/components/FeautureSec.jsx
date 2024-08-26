import React from "react";
import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai";
const data = [
  {
    id: 0,
    name: "Dried Mango",
    price: "$500",
    img: "images/product__1.webp",
  },
  {
    id: 1,
    name: "Dried Mango",
    count: "8 Products",
    img: "images/product__2.webp",
  },
  {
    id: 2,
    name: "Dried Mango",
    price: "$500",
    img: "images/product__3.webp",
  },
  {
    id: 3,
    name: "Dried Mango",
    price: "$500",
    img: "images/product__4.webp",
  },
  {
    id: 4,
    name: "Dried Mango",
    price: "$500",
    img: "images/product__5.webp",
  },
];
const FeautureSec = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-3xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fresh fruits and vegetables online at best price
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-accents">
            Vegetable
          </button>
          <button className="text-gray-600 hover:text-accents">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/images/feature__1.webp"
          />
        </div>
        {data.map((el) => {
          return (
            <>
              <div className="border border-gray-200 hover:bg-gray-200 hover:border-gray-300 hover: scale-105 transition-transform rounded-lg relative m-2">
                <img src={el.img} alt="" />

                <div className="space-y-2 relative pt-4">
                  <div className="text-yellow-400 flex gap-[2px] text-[20px]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <h3 className="font-medium">{el.name}</h3>
                  <h3 className="text-2xl font-medium text-red-600">
                    {el.price}
                  </h3>
                  <div className="absolute -top-4 right-2 bg-accents text-white text-[20px] w-[50px] h-[50px] rounded-full grid place-items-center">
                    <AiOutlineShopping />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FeautureSec;
