import styled from "styled-components";
import COLORS from "../constants/colors";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("As senhas devem ser iguais");
      setForm({ ...form, password: "", confirmPassword: "" });
      return;
    }

    console.log(form);
    // add req
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <Container>
      <Title>MyWallet</Title>
      <form onSubmit={handleSubmit}>
        <Input required onChange={handleInput} name="name" value={form.name} type="text" placeholder="Nome" />
        <Input required onChange={handleInput} name="email" value={form.email} type="email" placeholder="E-mail" />
        <Input required onChange={handleInput} name="password" value={form.password} type="password" placeholder="Senha" />
        <Input required onChange={handleInput} name="confirmPassword" value={form.confirmPassword} type="password" placeholder="Confirme a senha" />
        <Button>Cadastrar</Button>
      </form>
      <TextLogin to="/">Já tem uma conta? Entre Agora!</TextLogin>
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

const TextLogin = styled(Link)`
  margin-top: 30px;

  color: #ffffff;
  font-size: 15px;
  font-weight: 700;

  text-decoration: none;
`;
