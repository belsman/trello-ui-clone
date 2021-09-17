import React from "react";

function Header() {
  return (
    <section className="">
    <nav>
      <div className="leftNav">
        <button className="navbtn">Home</button>
        <button className="navbtn">Boards</button>
        <div><input type="search" placeholder="Jump to..."/></div>
      </div>

      <div className="middleNav">
        <span>Trello</span>
      </div>

      <div className="rightNav">
        <button className="navbtn">Create</button>
        <button className="navbtn">Info</button>
        <button className="navbtn">Bell</button>
        <button className="navbtn">Profile Link</button>
      </div>
    </nav>
    </section>
  )
}

export default Header;
