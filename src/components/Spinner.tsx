import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner">
      <svg viewBox="0 0 50 50" width="20px" height="20px">
        <path
          d="M25,5a20,20 0 1,0 20,20a20,20 0 0,0 -20,-20"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
        ></path>
        <path
          d="M25,5a20,20 0 1,1 -20,20a20,20 0 0,1 20,-20"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
        ></path>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        ></animateTransform>
      </svg>
    </div>
  );
};

export default Spinner;
