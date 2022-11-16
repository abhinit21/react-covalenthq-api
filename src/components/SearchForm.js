import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setCurrency } = useGlobalContext();
  const [searchQuery, setsearchQuery] = useState("USD");

  const searchRecords = (e) => {
    const newVal = e.target.value;
    setsearchQuery(newVal);
    setCurrency(newVal);
  };

  return (
    <main>
      <h2>Transactions Records</h2>
      <InputGroup className="my-3">
        <InputGroup.Text id="inputGroup-sizing-default">Query</InputGroup.Text>
        <Form.Control
          value={searchQuery}
          onChange={searchRecords}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </main>
  );
};

export default SearchForm;
