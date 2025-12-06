import React from "react";
import styles from "./index.module.css";

const Button: React.FC<{ label: string }> = ({ label }) => {
  const handleClick = () => {};
  return (
    <button className={styles.button} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
