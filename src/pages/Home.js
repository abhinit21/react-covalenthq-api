import React from "react";

import RecordsList from "../components/RecordsList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <RecordsList />
    </main>
  );
};

export default Home;
