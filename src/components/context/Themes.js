import { createContext, useEffect } from "react";
import { useState } from "react";
const themes = {
  dark: {
    backgroundColor: "#011f30",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "#011f30",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [isDark, setDark] = useState(true);
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () =>{
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        setDark(!isDark);
    }

    useEffect(()=>{
      const isDark = localStorage.getItem('isDark') === "false";
      setDark(isDark)
    },[])

    return <ThemeContext.Provider value = {[{theme, isDark}, toggleTheme]}>{children}</ThemeContext.Provider>
}