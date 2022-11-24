import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Record from "./pages/Record";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Requested from "./pages/Requested";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/requested" element={<Requested/>}/>
      <Route path="/requested/record/:tx_hash" element={<Record />} />
      <Route path="*" element={<Error />} />
      
    </Routes>
  );
}

export default App;
