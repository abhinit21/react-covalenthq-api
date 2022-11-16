import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";

import { useGlobalContext } from "../context";

const Record = () => {
  var { tx_hash } = useParams();

  const { recordsList } = useGlobalContext();
  const record = recordsList.find((item) => item.tx_hash === tx_hash);

  return (
    <main>
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>{record.tx_hash}</ListGroup.Item>
          <ListGroup.Item>{record.act}</ListGroup.Item>
          <ListGroup.Item>{record.address}</ListGroup.Item>
          <ListGroup.Item>{record.to_address}</ListGroup.Item>
          <ListGroup.Item>{record.sender_address}</ListGroup.Item>
          <ListGroup.Item>{record.total_quote}</ListGroup.Item>
          <ListGroup.Item>{record.quote_currency}</ListGroup.Item>
        </ListGroup>
      </Card>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              className="w-25"
              src={record.token_0.logo_url}
            />
            <Card.Body>
              <Card.Title>{record.token_0.contract_name}</Card.Title>
              <Card.Text>{record.token_0.contract_ticker_symbol}</Card.Text>
              <Card.Text>{record.token_0.contract_decimals}</Card.Text>
              <Card.Text>{record.token_0.contract_address}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              className="w-25"
              src={record.token_1.logo_url}
            />
            <Card.Body>
              <Card.Title>{record.token_1.contract_name}</Card.Title>
              <Card.Text>{record.token_1.contract_ticker_symbol}</Card.Text>
              <Card.Text>{record.token_1.contract_decimals}</Card.Text>
              <Card.Text>{record.token_1.contract_address}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Record;
