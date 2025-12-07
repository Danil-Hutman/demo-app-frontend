import React from "react";
import styles from "./index.module.css";

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onClick?.(e);
    },
    [onClick]
  );

  return (
    <button className={styles.button} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
