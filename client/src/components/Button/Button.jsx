import React from "react";
import { IoBed } from "react-icons/io5";

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <IoBed />
      {children}
    </button>
  );
};

export default Button;
