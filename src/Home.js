import React from "react";
// import BoardDetail from "./BoardDetail";
import BoardList from "./features/boards/BoardList";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <BoardList />
    </>
  );
}

export default Home;
