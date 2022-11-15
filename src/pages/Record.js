import React from "react";
import { useParams } from "react-router-dom";

const Record = () => {
  var { tx_hash } = useParams();

  return (
    <main>
      <h2>Single Record with hash {tx_hash}</h2>
    </main>
  );
};

export default Record;
