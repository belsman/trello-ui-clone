import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faChalkboard, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./CardDetail.module.css";

function CardDetail()  {
  return (
    <article className={styles.cardDetail}>
      <main className={styles.cardDetailMain}>
        <div className={styles.cardDetailTitle}>
          <span className={styles.icon}>
              <FontAwesomeIcon icon={faChalkboard} />
          </span>
          <div className={styles.cardDetailTextWrapper}>
            <TextareaAutosize defaultValue={"This is my first board"} />
          </div>
        </div>
        <ul className={styles.immutableCardDetail}>
          <li>
            <div className={styles.immutableLabels}>
              <span className={''}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>{' '}Created by </span>
            </div>
            <span className={styles.immutableValue}>{'belsman'}</span>
          </li>
        </ul>
        <div className={styles.desciptionWrapper}>
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faAlignLeft} />
          </span>
          <div className={styles.descriptionformContent}>
            <label>Description</label>
            <TextareaAutosize />
          </div>
        </div>
      </main>
      <aside className={styles.cardDetailAction}>
        <h4>Action</h4>
        <ul>
          <li>
            <span className="actionIcon">
              <FontAwesomeIcon icon={faTrash} />
            </span>
            <span className={styles.actionLabel}>Delete</span>
          </li>
        </ul>
      </aside>
    </article>
  );
}

export default CardDetail;
