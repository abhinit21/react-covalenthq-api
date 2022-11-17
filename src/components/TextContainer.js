import React from "react";
import { Container, ListGroup } from "react-bootstrap";

function TextContainer({ label, value }) {
  return (
    <Container rounded className="my-1">
      <h3 className="badge bg-primary text-wrap" style={{ width: "10em" }}>
        {label}
      </h3>
      <ListGroup.Item className="rounded">{value}</ListGroup.Item>
    </Container>
  );
}

export default TextContainer;
