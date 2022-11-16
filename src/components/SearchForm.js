import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setCurrency } = useGlobalContext();
  const { setItemSize } = useGlobalContext();

  const [searchQuery, setsearchQuery] = useState("USD");
  const [size, setSize] = useState(5);

  const updateCurrency = (e) => {
    const newVal = e.target.value;
    setsearchQuery(newVal);
    setCurrency(newVal);
  };

  const updateSize = (e) => {
    const newVal = e.target.value;
    setSize(newVal);
    setItemSize(newVal);
  };

  return (
    <main>
      <h2>Transactions Records</h2>
      <InputGroup className="w-25 my-2 mt-4">
        <InputGroup.Text className="bg-primary text-white rounded">
          Query
        </InputGroup.Text>
        <Form.Control
          className="rounded"
          value={searchQuery}
          onChange={updateCurrency}
        />
        <InputGroup.Text className="ms-5 bg-primary text-white rounded">
          Size
        </InputGroup.Text>
        <Form.Control className="rounded" value={size} onChange={updateSize} />
      </InputGroup>
    </main>
  );
};

export default SearchForm;
