import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container pb-3 pt-16">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          <div className="overflow-hidden rounded-lg">
            <img
              className="hover:scale-105 transition-transform"
              src="/images/banner__1.webp"
              alt="banner"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              className="hover:scale-105 transition-transform"
              src="/images/banner__2.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
