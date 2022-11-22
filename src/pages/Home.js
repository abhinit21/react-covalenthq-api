import React from "react";

import NavBar from "../components/NavBar";
import RecordsList from "../components/RecordsList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <NavBar />
      <SearchForm />
      <RecordsList />
    </main>
  );
};

export default Home;
