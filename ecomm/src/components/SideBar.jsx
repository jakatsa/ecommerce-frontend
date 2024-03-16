import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartItem } from "./CartItem";
import { SideBarContext } from "../context/SideBarContext";
export const SideBar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  return <div>SideBar</div>;
};
