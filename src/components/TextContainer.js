import React from "react";
import { Container, ListGroup } from "react-bootstrap";

function TextContainer({ label, value }) {
  return (
    <Container className="my-1 rounded">
      <h3 className="badge bg-primary text-wrap" style={{ width: "10em" }}>
        {label}
      </h3>
      <ListGroup.Item className="rounded">{value}</ListGroup.Item>
    </Container>
  );
}

export default TextContainer;
