import React, { createContext, useState } from "react";



export const ThemeContext = createContext<{}>({ theme: "light", undefined });

export const ThemeProvider: React.FC<{} | any> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
