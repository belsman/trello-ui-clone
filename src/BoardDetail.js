import React from "react";
import BoardNav from "./BoardNav";
import styles from "./boardDetail.module.css";
import Header from "./Header";

function BoardDetail() {
  return (
    <div className={styles.rootDetail}>
      <Header />
      <BoardNav />
    </div>
  );
}

export default BoardDetail;
