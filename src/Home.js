import React from "react";
import BoardList from "./BoardList";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div className="">
        <BoardList />
      </div>
    </>
  );
}

export default Home;
