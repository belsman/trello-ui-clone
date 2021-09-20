import React from "react";
import BoardNav from "./BoardNav";
import styles from "./boardDetail.module.css";
import Header from "./Header";

function BoardDetail() {
  return (
    <div className={styles.rootDetail}>
      <Header />
      <BoardNav />
      <main className={styles.board}>
        <div className={styles.boardLists}>
          <section className={styles.list}>
            <header className={styles.listHeader}>
              <h4>To Do</h4>
              <span className={styles.listHeaderMenu}>...</span>
            </header>
            <div className="cards"></div>
            <footer className="list-footer">
              <div className="add-card-action">
                <button type="button">Add a card</button>
              </div>
            </footer>
          </section>
        </div>
        <div className="create-list">

        </div>
      </main>
    </div>
  );
}

export default BoardDetail;
