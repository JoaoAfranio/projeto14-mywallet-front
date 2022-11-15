import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import InputRecord from "./pages/InputRecord";
import Login from "./pages/Login";
import OutputRecord from "./pages/OutputRecord";
import Records from "./pages/Record";
import Register from "./pages/Register";
import UserContext from "./contexts/user";

import { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/records" element={<Records />} />
          <Route path="/newInput" element={<InputRecord />} />
          <Route path="/newOutput" element={<OutputRecord />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
