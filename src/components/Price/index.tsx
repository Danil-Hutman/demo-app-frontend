import React from "react";
import styles from "./index.module.css";

type PriceProps = {
  price: number;
  decimals?: number;
};

const Price: React.FC<PriceProps> = ({ price, decimals = 0 }) => (
  <span className={styles.price}>{Number(price).toFixed(decimals)} $</span>
);

export default Price;
