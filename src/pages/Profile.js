import React from "react";
import { Card, Table, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrInfo } from "react-icons/gr";
import { IconContext } from "react-icons";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import { useGlobalContext } from "../context";

const Profile = () => {
  const { isLoading, recordsList } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <NavBar />
        <Loading />
      </main>
    );
  }

  if (!recordsList) {
    return <p>No Records to display.</p>;
  }

  return (
    <main>
      <NavBar />
      <Card style={{ border: "none" }} className="shadow p-2">
        <Card.Header className="font-weight-bold">Overview</Card.Header>
        <Card.Body>
          <Card.Text>Balance:</Card.Text>
          <hr />
          <Card.Text>MATIC Value:</Card.Text>
          <hr />
          <Card.Text>Token:</Card.Text>
        </Card.Body>
      </Card>
      <hr />
      <Card style={{ border: "none" }} className="shadow px-3">
        <div className="d-flex justify-content-between">
          <ButtonGroup
            style={{ height: "2.5rem" }}
            className="d-flex gap-2 rounded-5 my-3"
          >
            <Button className="rounded">First</Button>
            <div className="bg-primary rounded-3 px-2">
              <IconContext.Provider value={{ color: "white" }}>
                <div className="pt-2 ps-1">
                  <FaChevronRight fontSize="1.5rem" />
                </div>
              </IconContext.Provider>
            </div>
            <p
              style={{ fontSize: "1rem", height: "2.5rem" }}
              className="bg-primary rounded-3 p-2 text-white"
            >
              Page 1 of 5
            </p>
            <div className="bg-primary rounded-3 px-2">
              <IconContext.Provider value={{ color: "white" }}>
                <div className="pt-2 pe-1">
                  <FaChevronLeft fontSize="1.5rem" />
                </div>
              </IconContext.Provider>
            </div>
            <Button className="rounded">Last</Button>
          </ButtonGroup>
          <Button style={{ width: "6rem" }} className="rounded-5 my-3">
            View All
          </Button>
        </div>
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
                    <Link to={`record/${record.tx_hash}`}>
                      {record.tx_hash}
                    </Link>
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
      </Card>
    </main>
  );
};

export default Profile;
