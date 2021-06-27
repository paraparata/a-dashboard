import React from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({ src, alt }) => {
  return <img src={src} className={styles.root} width="72" alt={alt} />;
};

export default Avatar;
