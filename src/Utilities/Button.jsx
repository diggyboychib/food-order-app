import React from "react";
import styles from "./Button.module.css";

function Button({ className, type, onClick, children }) {
  return (
    <button className={className} onClick={onClick} type={type || "button"}>
      {children}
    </button>
  );
}

export default Button;
