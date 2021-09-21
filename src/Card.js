import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function Card() {
  return (
    <div className="card">
      <h4>This is my first card.</h4>
      <button type="button">
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
    </div>
  )
}

export default Card;
