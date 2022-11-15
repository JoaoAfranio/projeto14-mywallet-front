import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../constants/colors";
import UserContext from "../contexts/user";
import axios from "axios";

function OutputRecord() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({ value: "", description: "" });

  const URL = "http://localhost:5000/record";

  useEffect(() => {
    if (!user.token) {
      alert("Você não esta logado!");
      navigate("/");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const date = new Date().toLocaleDateString("pt-BR");

    const input = {
      userId: user._id,
      value: form.value,
      description: form.description,
      type: "output",
      date,
    };

    const headers = {
      authorization: `Bearer ${user.token}`,
    };

    axios
      .post(URL, input, { headers })
      .then((req, res) => {
        navigate("/records");
      })
      .catch((err) => console.log(err));
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <Container>
      <Tittle>Nova Saída</Tittle>
      <form onSubmit={handleSubmit}>
        <Input onChange={handleInput} name="value" value={form.value} required type="number" placeholder="Valor" />
        <Input onChange={handleInput} name="description" value={form.description} required type="text" placeholder="Descrição" />
        <Button>Salvar Saída</Button>
      </form>
    </Container>
  );
}

export default OutputRecord;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: ${COLORS.primary};

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Tittle = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;

  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;

  border-radius: 5px;
  border: none;
  outline: none;

  font-size: 20px;
  color: #000000;

  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${COLORS.secondary};
  color: #ffffff;

  border-radius: 5px;
  border: none;

  padding: 15px;

  font-size: 20px;
  font-weight: 700;
`;
