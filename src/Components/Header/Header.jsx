import React from "react";
import styles from "./Header.module.css";
import Button from "../../Utilities/Button";
import { foodContext } from "../Context/context";
import { useContext } from "react";

function Header({ setModalState }) {
  const { myCart } = useContext(foodContext);
  return (
    <div className={styles.header}>
      <div className={styles["header-container"]}>
        <div>React Meals</div>
        <Button
          className={styles["header-button-style"]}
          onClick={(e) => setModalState(true)}
        >
          <p>Your Cart</p>

          <p>{myCart.length}</p>
        </Button>
      </div>
    </div>
  );
}

export default Header;
