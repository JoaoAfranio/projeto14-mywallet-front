import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import Login from "./pages/Login";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
