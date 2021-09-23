import { faChalkboard, faGripVertical, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./CardDetail.module.css";

function CardDetail()  {
  return (
    <article className={styles.cardDetail}>
      <main className={styles.cardDetailMain}>
        <div>
          <span className="icon">
              <FontAwesomeIcon icon={faChalkboard} />
          </span>
          <div>
            <textarea></textarea>
          </div>
        </div>
        <ul className="immutableCardDetail">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span>Creator: </span>
            <span>belsman</span>
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
