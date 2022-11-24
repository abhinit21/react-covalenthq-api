import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";

import TextContainer from "../components/TextContainer";
import { useGlobalContext } from "../context";

const Record = () => {
  var { tx_hash } = useParams();

  const { recordsList } = useGlobalContext();
  const record = recordsList.find((item) => item.tx_hash === tx_hash);

  return (
    <main>
      <Link to="/">
        <Button variant="primary" className="mb-3">
          Home
        </Button>
      </Link>

      <Card border="light">
        <ListGroup variant="flush">
          <TextContainer label="tx_hash" value={record.tx_hash} />
          <TextContainer label="block_height" value={record.block_height} />
          <TextContainer
            label="block_signed_at"
            value={record.block_signed_at}
          />
          <TextContainer label="from_address" value={record.from_address} />
          <TextContainer label="to_address" value={record.to_address} />
          <TextContainer label="gas_offered" value={record.gas_offered} />
          <TextContainer label="gas_price" value={record.gas_price} />
          <TextContainer label="gas_quote" value={record.gas_quote} />
          <TextContainer label="gas_spent" value={record.gas_spent} />
          <TextContainer label="value_quote" value={record.value_quote} />
        </ListGroup>
      </Card>
      <Row className="p-3">
        <Col></Col>
        <Col className="px-5">
          <Card className="p-3">
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
          <Card className="p-3">
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
