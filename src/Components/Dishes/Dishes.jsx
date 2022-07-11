import React, { useState } from "react";
import styles from "./Dishes.module.css";
import Button from "../../Utilities/Button";
import { foodContext } from "../Context/context";
import { useContext } from "react";
function Dishes({ name, details, amount }) {
  const [quantity, setQuantity] = useState(0);
  const { myCart, setMyCart } = useContext(foodContext);

  return (
    <div className={styles["dish-container"]}>
      <div className={styles["dishes-details"]}>
        <p>{name}</p>
        <p>{details}</p>
        <p>{amount}</p>
      </div>
      <div className={styles["amount-details"]}>
        <div>
          <span style={{ marginRight: "10px" }}>Quantity</span>
          <span>{quantity}</span>
        </div>

        <Button
          onClick={(e) => {
            setQuantity((prev) => prev + 1);
          }}
        >
          +Add
        </Button>
      </div>
    </div>
  );
}

export default Dishes;
