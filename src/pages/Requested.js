import React from "react";

import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";
import RecordsList from "../components/RecordsList";
import TableList from "../components/TableList";

const Requested = () => {
  return (
    <main>
      <NavBar />
      <RecordsList />
    </main>
  );
};

export default Requested;
