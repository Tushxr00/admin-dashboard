import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          borderRadius: props.borderRadius,
        }}
        className={`text-${props.size} p-3  hover:drop-shadow-xl`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
