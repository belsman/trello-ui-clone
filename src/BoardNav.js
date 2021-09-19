import React from "react";

function BoardNav() {
  return (
    <nav>
      <section className="first-nav">
        <button type="button">Board</button>
        <h1>Alpha board</h1>
      </section>
      <section className="second-nav">
        <div className="second-nav-part-1">
          <div className="subnav-avatar"></div>
          <button type="button">Invite</button>
        </div>
        <div className="second-nav-part-2">
          <button type="button" className="automation-btn">Automation</button>
          <button type="button" className="show-menu">Show menu</button>
        </div>
      </section>
    </nav>
  );
}

export default BoardNav;
