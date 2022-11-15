import styled from "styled-components";
import COLORS from "../constants/colors";
import InfoRecord from "../components/InfoRecord";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/user";
import axios from "axios";

function Records() {
  const URL = "http://localhost:5000/record";
  const { user } = useContext(UserContext);
  const [records, setRecords] = useState([]);

  const headers = {
    authorization: `Bearer ${user.token}`,
  };

  useEffect(() => {
    axios.get(URL, { headers }).then((req, res) => {
      setRecords(req.data);
      console.log(req);
    });
  }, []);

  return (
    <Container>
      <Header>
        <Tittle>Olá, {user.name}</Tittle>
        <ion-icon name="exit-outline"></ion-icon>
      </Header>
      <ContainerRecord>
        {records.map((record) => {
          return <InfoRecord date={record.date} description={record.description} value={record.value} type={record.type} />;
        })}
        {records.length === 0 ? (
          <Info>Não há registros de entrada ou saída</Info>
        ) : (
          <BoxBalance>
            <h1>SALDO</h1>
            <p className="balance">2849.96</p>
          </BoxBalance>
        )}
      </ContainerRecord>
      <ContainerButton>
        <Button to="/newInput">
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova Entrada</p>
        </Button>

        <Button to="/newOutput">
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
  flex-direction: column;

  position: relative;

  height: 70vh;

  background-color: #ffffff;

  border-radius: 5px;

  padding: 0px 10px;

  overflow: auto;
`;

const Info = styled.h1`
  width: 200px;
  text-align: center;
  font-size: 20px;
  color: ${COLORS.grey};

  margin: auto;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  height: 100px;

  margin-top: -10px;
`;

const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  background-color: ${COLORS.secondary};

  line-height: 20px;
  color: #ffffff;
  text-decoration: none;

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

const BoxBalance = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;

  width: 100%;
  position: sticky;

  background-color: #ffffff;

  bottom: 5px;

  h1 {
    font-weight: 700;
  }

  .balance {
    color: ${COLORS.green};
  }
`;
