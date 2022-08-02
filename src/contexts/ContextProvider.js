import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#02C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState("Light");

const setMode = (e)=>{
  setCurrentMode(e.target.value)
  localStorage.setItem('themeMode',e.target.value)
}

const setColor = (e)=>{
  setCurrentColor(e.target.value)
  localStorage.setItem('themeColor',e.target.value)
}
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        CurrentMode,
        setCurrentColor,
        setCurrentMode,
        themeSettings, 
        setThemeSettings
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
