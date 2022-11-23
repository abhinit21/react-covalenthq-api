import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Loading from "./Loading";
import { useGlobalContext } from "../context";

const RecordsList = () => {
  const { isLoading, recordsList, quoteCurrency } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (!recordsList) {
    return <p>No Records to Display</p>;
  }

  return (
    <ListGroup as="ol" numbered>
      {recordsList.map((record) => {
        return (
          <LinkContainer
            className="my-1 rounded"
            key={record.tx_hash}
            to={`record/${record.tx_hash}`}
          >
            <ListGroup.Item
              as="li"
              action
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{record.tx_hash}</div>
                {quoteCurrency}
              </div>
              <Badge>{record.value_quote}</Badge>
            </ListGroup.Item>
          </LinkContainer>
        );
      })}
    </ListGroup>
  );
};

export default RecordsList;
