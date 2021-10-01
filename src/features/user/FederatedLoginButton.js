import React from "react";
import styles from "./federatedLoginButton.module.css";

function FederatedLoginButton({ cssId, children }) {
  return (
    <div className={styles.federatedLoginBtn}>
        <span id={cssId} className={styles.icon}></span>
        <span className={styles.label}>{children}</span>
    </div>
  );
}

export default FederatedLoginButton;
