import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import InputRecord from "./pages/InputRecord";
import Login from "./pages/Login";
import OutputRecord from "./pages/OutputRecord";
import Records from "./pages/Record";
import Register from "./pages/Register";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
