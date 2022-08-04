import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = (props) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          console.log({ initialState });
          setIsClicked(initialState);
        }}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          borderRadius: props.borderRadius,
        }}
        className={` text-${props.size} p-3 w-${props.width} hover:drop-shadow-xl hover:bg-${props.bgHoverColor}`}
      >
        {props.text} {props.icon}
      </button>
    </div>
  );
};

export default Button;
