import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import LoginScreen from "./Pages/LoginScreen";

const MainComponent = () => {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;
    case "/login":
      component = <LoginScreen />;
      break;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
};

export default MainComponent;
