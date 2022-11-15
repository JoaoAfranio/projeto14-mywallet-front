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
  const [user, setUser] = useState({
    _id: "6373d4ca44a77ef9ade40469",
    name: "joao",
    email: "joao@hotmail.com",
    token: "d9aa0686-a444-4403-881b-cd6391a2c54d",
  });

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
