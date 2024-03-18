import { useContext, useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SideBarContext";
import { CartContext } from "../context/CartContext";
import LogoImage from "../image/store.png";

import { BsBag } from "react-icons/bs";
export const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [isActive, setIsActive] = useState(true);
  const { itemAmount } = useContext(CartContext);
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} 
    fixed w-full z-10 transition-all `}
    >
      <div
        className="container mx-auto
      flex item-center justify-between h-full"
      >
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={LogoImage} />
          </div>
        </Link>
        <div className="cursor-pointer flex relative ">
          <BsBag className="text-2xl" onClick={() => setIsOpen(!isOpen)} />
          <div
            className="bg-red-500 absolute -right-2 -bottom-2
        text-[12px] w-[18px] h-[18px] text-white rounded-full
        flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>

      <SideBar />
    </header>
  );
};
