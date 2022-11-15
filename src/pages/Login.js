import styled from "styled-components";
import COLORS from "../constants/colors";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();

    // add req
    console.log(form);
    navigate("/records");
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  return (
    <Container>
      <Title>MyWallet</Title>
      <form onSubmit={handleSubmit}>
        <Input required onChange={handleInput} type="text" placeholder="E-mail" name="email" value={form.email} />
        <Input required onChange={handleInput} type="password" placeholder="Senha" name="password" value={form.password} />
        <Button>Entrar</Button>
      </form>
      <TextRegister to="/register">Primeira vez? Cadastre-se!</TextRegister>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.primary};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    width: 85vw;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-family: "Saira Stencil One";
  color: #ffffff;

  margin-bottom: 30px;
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

const TextRegister = styled(Link)`
  margin-top: 30px;

  color: #ffffff;
  font-size: 15px;
  font-weight: 700;

  text-decoration: none;
`;
