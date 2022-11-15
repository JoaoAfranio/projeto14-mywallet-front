import styled from "styled-components";
import COLORS from "../constants/colors";

function Login() {
  return (
    <Container>
      <Title>MyWallet</Title>
      <form>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme a senha" />
        <Button>Cadastrar</Button>
      </form>
      <TextLogin>Já tem uma conta? Entre Agora!</TextLogin>
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

const TextLogin = styled.p`
  margin-top: 30px;

  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
`;
