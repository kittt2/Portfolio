import { Children, createContext,useContext, useEffect, useState } from "react";

const themecontext =createContext();

export const usetheme =()=>{
    return useContext(themecontext);
}

export const Themeprovider =({children})=>{

    const savedTheme = localStorage.getItem('theme') || 'false';
  const [isdark, setisdark] = useState(savedTheme === 'true');
    const togle =()=>{
        setisdark((prevState)=>!prevState);
    };
    const theme =isdark ? "dark":"light";
    useEffect(() => {
     document.documentElement.setAttribute("data-theme",theme)
     localStorage.setItem('theme', isdark.toString());
    }, [isdark,theme]);
    

    return <themecontext.Provider value={{theme,togle}}>{children}</themecontext.Provider>
};

