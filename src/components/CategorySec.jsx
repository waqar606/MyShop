import React from "react";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "images/category__1.webp",
  },
  {
    id: 1,
    name: "Fresh Vegs",
    count: "8 Products",
    img: "images/category__2.webp",
  },
  {
    id: 2,
    name: "Canned Goods",
    count: "10 Products",
    img: "images/category__3.webp",
  },
  {
    id: 3,
    name: "Bread & Bakery",
    count: "12 Products",
    img: "images/category__4.webp",
  },
  {
    id: 4,
    name: "Fishes",
    count: "10 Products",
    img: "images/category__5.webp",
  },
  {
    id: 6,
    name: "Soft Drinks",
    count: "5 Products",
    img: "images/category__6.webp",
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "images/category__7.webp",
  },
];
const CategorySec = () => {
  return (
    <div className="container pb-2 pt-16">
      <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4">
        {/* <div className="border border-gray-200 hover:border-gray-300 hover: scale-105 transition-transform rounded-lg"> */}
        {/* <div className="flex justify-between items-center p-6"> */}
        {data.map((el) => {
          return (
            <>
              <div className="border border-gray-200 hover:bg-gray-200 hover:border-gray-300 hover: scale-105 transition-transform rounded-lg">
                <div className="flex justify-between items-center p-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-x1">{el.name}</h3>
                    <p className="text-gray-500">{el.count}</p>
                  </div>
                  <img className="w-[100px]" src={el.img} alt="" />
                </div>
              </div>
            </>
          );
        })}
        {/* <div className="space-y-4">
              <h3 className="font-medium text-x1">text</h3>
              <p className="text-gray-500">subtext</p>
            </div>
            <img className="w-[100px]" src="/images/category__1.webp" alt="" /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CategorySec;
