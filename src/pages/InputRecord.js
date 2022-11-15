import styled from "styled-components";
import COLORS from "../constants/colors";

function InputRecord() {
  return (
    <Container>
      <Tittle>Nova Entrada</Tittle>
      <Input type="text" placeholder="Valor" />
      <Input type="text" placeholder="Descrição" />
      <Button>Salvar Entrada</Button>
    </Container>
  );
}

export default InputRecord;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: ${COLORS.primary};

  gap: 10px;
`;

const Tittle = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;

  margin-bottom: 20px;
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
