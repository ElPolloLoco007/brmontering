import React, { useState } from "react";
import "./App.css";
import BodyText from "./components/text/index.jsx";
import Header from "./components/header/index.jsx";
import LogoComponent from "./components/logo/index.jsx";
import CustomGallery from "./components/gallery/index.jsx"; 

const App = () => {
  const [isTextComplete, setIsTextComplete] = useState(false);

  const handleTextComplete = () => {
    setIsTextComplete(true);
  };

  return (
    <>
      <Header />
      <LogoComponent />
      <BodyText onComplete={handleTextComplete} />
      <CustomGallery isVisible={isTextComplete} /> 
    </>
  );
};

export default App;