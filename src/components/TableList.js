import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrInfo } from "react-icons/gr";

import Loading from "./Loading";
import { useGlobalContext } from "../context";

function TableList() {
  const { isLoading, recordsList } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (!recordsList) {
    return <p>No Records to display.</p>;
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th></th>
          <th>tx_hash</th>
          <th>from_address</th>
          <th>to_address</th>
          <th>gas_price</th>
          <th>value_quote</th>
        </tr>
      </thead>
      <tbody>
        {recordsList.map((record) => {
          return (
            <tr key={record.tx_hash}>
              <td>
                <GrInfo />
              </td>
              <td>
                <Link to={`record/${record.tx_hash}`}>{record.tx_hash}</Link>
              </td>
              <td>{record.from_address}</td>
              <td>{record.to_address}</td>
              <td>{record.gas_price}</td>
              <td>{record.value_quote}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableList;
