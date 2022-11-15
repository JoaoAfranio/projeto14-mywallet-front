import styled from "styled-components";
import COLORS from "../constants/colors";

function Records() {
  return (
    <Container>
      <Header>
        <Tittle>Olá Fulano</Tittle>
        <ion-icon name="exit-outline"></ion-icon>
      </Header>
      <ContainerRecord>
        <Info>Não há registros de entrada ou saída</Info>
      </ContainerRecord>
      <ContainerButton>
        <Button>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova Entrada</p>
        </Button>

        <Button>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova Saída</p>
        </Button>
      </ContainerButton>
    </Container>
  );
}

export default Records;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: ${COLORS.primary};

  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ion-icon {
    font-size: 25px;
    color: #ffffff;
  }
`;

const Tittle = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
`;

const ContainerRecord = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70vh;

  background-color: #ffffff;

  border-radius: 5px;
`;

const Info = styled.h1`
  width: 200px;
  text-align: center;
  font-size: 20px;
  color: ${COLORS.grey};
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  height: 100px;

  margin-top: -10px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  background-color: ${COLORS.secondary};
  color: #ffffff;

  border: none;
  border-radius: 5px;
  outline: none;

  padding: 8px;

  ion-icon {
    font-size: 25px;
  }

  p {
    font-size: 17px;
    font-weight: 700;

    width: 30px;
  }
`;
