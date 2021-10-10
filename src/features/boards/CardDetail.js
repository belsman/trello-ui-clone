import React, { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faChalkboard, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./CardDetail.module.css";

function CardDetail({ card, closeFn }) {

  const { title, description, creator } = card;

  const [ titleValue, setTitleValue ] = useState(title);
  const [ descValue, setDescValue ]  = useState(description);

  const CardAction = () => (
    <div className={styles.editAction}>
      <button type="submit">Edit</button>
      <button type="button">Reset</button>
    </div>
  );
  
  return (
    <article className={styles.cardDetail}>
      <main className={styles.cardDetailMain}>
        <div className={styles.cardDetailTitle}>
          <span className={styles.icon}>
              <FontAwesomeIcon icon={faChalkboard} />
          </span>
          <div className={styles.cardDetailTextWrapper}>
            <TextareaAutosize
              minRows={1}
              maxRows={3}
              value={titleValue}
              onChange={e => setTitleValue(e.target.value) }
            />
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
            <span className={styles.immutableValue}>{creator}</span>
          </li>
        </ul>
        <div className={styles.desciptionWrapper}>
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faAlignLeft} />
          </span>
          <div className={styles.descriptionformContent}>
            <label>Description</label>
            <TextareaAutosize
              minRows={3}
              maxRows={7}
              value={descValue}
              onChange={e => setDescValue(e.target.value)}
              placeholder={"Add a more detail description..."}
            />
          </div>
        </div>
        { (title !== titleValue || description !== descValue) && <CardAction /> }
      </main>
      <aside className={styles.cardDetailAction}>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <h4>Action</h4>
          <button onClick={closeFn} type="button">X</button>
        </div>
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
