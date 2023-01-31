import React, { createContext, useContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [openDrawer, setOpenDrawer] = useState({ open: false, type: "" });
  return (
    <Context.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </Context.Provider>
  );
}

const useContextProvider = () => {
  const context = useContext(Context);

  return context;
};

export { ContextProvider, useContextProvider };
