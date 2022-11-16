import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

import Loading from "./Loading";
import { useGlobalContext } from "../context";

const RecordsList = () => {
  const { isLoading, recordsList } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (!recordsList) {
    return <h2>No Records to Display</h2>;
  }

  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      {recordsList.map((record) => {
        return (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{record.tx_hash}</div>
              {record.quote_currency}
            </div>
            <Badge>{record.total_quote}</Badge>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default RecordsList;
