import React from "react";
import TextContainer from "../components/TextContainer";
import { Card } from 'react-bootstrap';

import TableList from "../components/TableList";


const Profile = () => {
    return (
        <main>
            <Card style={{ border: "none" }} className="shadow p-2">
                <Card.Header className="font-weight-bold" >Overview</Card.Header>
                <Card.Body>
                    <Card.Text >
                        Balance:
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        MATIC Value:
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        Token:
                    </Card.Text>
                </Card.Body>
            </Card>
            <hr/>
            <TableList />
        </main>
    );
};




export default Profile;
