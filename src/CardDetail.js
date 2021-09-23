import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard, faGripVertical, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";

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
            <textarea
              className={styles.cardDetailTitleText}
              rows={1}
              value={"This is my first card"}
            >
            </textarea>
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
        <div>
          <span className="icon">
            <FontAwesomeIcon icon={faGripVertical} />
          </span>
          <div>
            <label>Description</label>
            <textarea></textarea>
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
            <span className="actionLabel">Delete</span>
          </li>
        </ul>
      </aside>
    </article>
  );
}

export default CardDetail;
