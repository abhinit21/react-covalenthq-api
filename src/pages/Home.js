import React from "react";

import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";
import RecordsList from "../components/RecordsList";
import TableList from "../components/TableList";

const Home = () => {
  return (
    <main>
      <NavBar />
      <SearchForm />
      {/* <RecordsList /> */}
      <TableList />
    </main>
  );
};

export default Home;
