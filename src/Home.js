import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import BoardList from "./features/boards/BoardList";
import Header from "./Header";

function Home() {
  const user = useSelector(state => state.user);

  if (!user.id) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <BoardList />
    </>
  );
}

export default Home;
