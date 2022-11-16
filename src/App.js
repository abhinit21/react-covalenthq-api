import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Record from "./pages/Record";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/record/:tx_hash" element={<Record />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
