import React from "react";
import BoardNav from "./BoardNav";
import styles from "./boardDetail.module.css";
import Header from "./Header";
import BoardListItem from "./BoardListItem";

function BoardDetail() {
  return (
    <div className={styles.rootDetail}>
      <Header />
      <BoardNav />
      <main className={styles.board}>
        <div className={styles.boardLists}>
          <BoardListItem />
        </div>
        <div className="create-list"></div>
      </main>
    </div>
  );
}

export default BoardDetail;
