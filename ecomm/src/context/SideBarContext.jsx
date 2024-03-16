import { useState, createContext } from "react";
//create context
export const SidebarContext = createContext();
export const SideBarContext = ({ children }) => {
  //sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};
