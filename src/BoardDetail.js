import React from "react";
import BoardNav from "./BoardNav";
import styles from "./boardDetail.module.css";
import Header from "./Header";

function BoardDetail() {
  return (
    <div className={styles.rootDetail}>
      <Header />
      <BoardNav />
      <main className="board">
        <div className="board-lists">
          <section className="list">
            <header className="list-header">
              <h4>To Do</h4>
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
