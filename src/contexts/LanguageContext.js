import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  
    const [language, setLang] =  useState("french");
    const changeLang  = (e) => setLang(e.target.value);
  
    return (
      <LanguageContext.Provider
        value={{language, changeLang}}
      >
        {props.children}
      </LanguageContext.Provider>
    );
  
}
