import React from "react";

import Navbar from "./Navbar";
import Forms from "./Form";
import PageContent from "./PageComponent";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <PageContent>
        <Navbar />
        <Forms />
      </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
