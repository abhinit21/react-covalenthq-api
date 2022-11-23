import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setQuoteCurrency, setItemSize } = useGlobalContext();

  const [searchQuery, setsearchQuery] = useState("USD");
  const [size, setSize] = useState(5);

  const updateCurrency = (e) => {
    const newVal = e.target.value;
    setsearchQuery(newVal);
    setQuoteCurrency(newVal);
  };

  const updateSize = (e) => {
    const newVal = e.target.value;
    setSize(newVal);
    setItemSize(newVal);
  };

  return (
    <main>
      <p>Transactions Records</p>
      <InputGroup className="w-25 my-2 mt-4">
        <InputGroup.Text className="bg-primary text-white rounded">
          Currency
        </InputGroup.Text>
        <Form.Control
          className="rounded text-uppercase"
          value={searchQuery}
          onChange={updateCurrency}
        />
        <InputGroup.Text className="ms-2 bg-primary text-white rounded">
          Size
        </InputGroup.Text>
        <Form.Control className="rounded" value={size} onChange={updateSize} />
      </InputGroup>
    </main>
  );
};

export default SearchForm;
