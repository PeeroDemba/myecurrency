import React, { createContext, useState } from "react";

export const TC = createContext<{
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

function ToggleContext({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState(false);
  return <TC.Provider value={{ toggle, setToggle }}>{children}</TC.Provider>;
}

export default ToggleContext;
