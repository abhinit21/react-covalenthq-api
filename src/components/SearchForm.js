import React, { useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";

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
      <Container className="d-flex justify-content-between my-3">
        <InputGroup>
          <InputGroup.Text>Query</InputGroup.Text>
          <Form.Control
            value={searchQuery}
            onChange={updateCurrency}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Size</InputGroup.Text>
          <Form.Control
            value={size}
            onChange={updateSize}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </Container>
    </main>
  );
};

export default SearchForm;
