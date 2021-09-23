import React from "react";

function CardDetail()  {
  return (
    <article>
      <main className="cardDetailMain">
        <div>
          <span className="icon"></span>
          <div>
            <textarea></textarea>
          </div>
        </div>
        <ul className="immutableCardDetail">
          <li>
            <span className="icon"></span>
            <span>Creator: </span>
            <span>belsman</span>
          </li>
        </ul>
        <div>
          <span className="icon"></span>
          <div>
            <label>Description</label>
            <textarea></textarea>
          </div>
        </div>
      </main>
      <aside className="cardDetailAction">
        <h4>Action</h4>
        <ul>
          <li>
            <span className="actionIcon"></span>
            <span className="actionLabel">Delete</span>
          </li>
        </ul>
      </aside>
    </article>
  );
}

export default CardDetail;
