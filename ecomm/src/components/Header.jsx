import { useContext } from "react";
import { SideBar } from "./SideBar";

import { SidebarContext } from "../context/SideBarContext";
import { BsBag } from "react-icons/bs";
export const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-pink-200">
      <div>Header</div>

      <div className="cursor-pointer flex relative">
        <BsBag className="text-2xl" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <SideBar />
    </header>
  );
};
