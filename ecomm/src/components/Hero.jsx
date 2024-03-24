import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      className=" bg-hero 
    bg-n-repeat bg-cover bg-center py-24 text-white"
      style={{ height: "800px" }}
    >
      <div
        className="container mx-auto flex
      justify-around h-full"
      >
        {/**text */}
        <div className="flex flex-col justify-center ">
          <div
            className="font-semibold flex 
          items-center uppercase"
          >
            <div
              className="w-10
            bg-red-500 mr-3"
              style={{ height: "2px" }}
            >
              New Trend
            </div>{" "}
            <br />
            <h1
              className="text-[70px] leading-[1.1]
          font-light mb-4"
            >
              January Sales Stylish <br />
              <span className="font-semibold">WOMENS</span>
            </h1>
          </div>

          <Link
            to={"/"}
            className="self-start uppercase font-semibold
          border-b-2 border-primary"
          >
            Disocver more
          </Link>
        </div>
        {/**image */}
        <div className="hidden lg:block">
          <img
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltab6956aa239e5073/65ce33e95c8110040ab88770/lookman_nigeria.jpg?auto=webp&format=pjpg&width=1200&quality=60"
            style={{ width: "100px" }}
          />
        </div>
      </div>
    </section>
  );
};
