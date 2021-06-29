import React from "react";
import styles from "./Button.module.scss";

const Button = ({ warning = false, children, ...props }) => {
  return (
    <button className={styles.root} data-warning={warning} {...props}>
      {children}
    </button>
  );
};

export default Button;
