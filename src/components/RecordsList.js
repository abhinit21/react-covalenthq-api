import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Loading from "./Loading";
import { useGlobalContext } from "../context";

const RecordsList = () => {
  const { currency, isLoading, recordsList } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (!recordsList) {
    return <h2>No Records to Display</h2>;
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
                {currency}
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
