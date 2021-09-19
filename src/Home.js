import React from "react";
import BoardDetail from "./BoardDetail";
// import BoardList from "./BoardList";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div className="">
        <BoardDetail />
      </div>
    </>
  );
}

export default Home;
