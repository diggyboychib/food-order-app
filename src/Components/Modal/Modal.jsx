import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { foodContext } from "../Context/context";
import styles from "./Modal.module.css";

function Modal() {
  const { myCart, setMycart } = useContext(foodContext);
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles["modal-container"]}>
        <div>
          {myCart.map((obj) => {
            if (obj.quantity > 0) {
              return (
                <>
                  <p>{obj.name}</p>
                  <p>{obj.amount}</p>
                  <p>x {obj.quantity}</p>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
