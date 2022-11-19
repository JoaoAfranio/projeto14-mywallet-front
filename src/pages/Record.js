import styled from "styled-components";
import COLORS from "../constants/colors";
import InfoRecord from "../components/InfoRecord";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/user";
import axios from "axios";

function Records() {
  const URL = "http://localhost:5000/record";
  const { user, setUser } = useContext(UserContext);
  const [records, setRecords] = useState([]);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  const headers = {
    authorization: `Bearer ${user.token}`,
  };

  useEffect(() => {
    if (!user.token) {
      alert("Você não esta logado!");
      navigate("/");
    }

    axios.get(URL, { headers }).then((req, res) => {
      const records = req.data;
      records.reverse();
      setRecords(records);

      calcBalance(records);
    });
  }, []);

  function calcBalance(records) {
    let atualBalance = balance;

    records.forEach((rec) => {
      const value = Number(rec.value);

      if (rec.type === "input") {
        atualBalance += value;
      } else {
        atualBalance -= value;
      }
    });

    setBalance(atualBalance);
  }

  function logout() {
    const URL = "http://localhost:5000/logout";
    axios
      .post(URL, {}, { headers })
      .then(() => {
        setUser({});
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Header>
        <Tittle>Olá, {user.name}</Tittle>
        <ion-icon onClick={logout} name="exit-outline"></ion-icon>
      </Header>
      <ContainerRecord>
        {records.map((record, idx) => {
          return <InfoRecord key={idx} date={record.date} description={record.description} value={record.value} type={record.type} />;
        })}
        {records.length === 0 ? (
          <Info>Não há registros de entrada ou saída</Info>
        ) : (
          <BoxBalance>
            <h1>SALDO</h1>
            <ValueBalance balance={balance} className="balance">
              {Number(balance).toFixed(2).replace(".", ",")}
            </ValueBalance>
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

  bottom: 0;

  h1 {
    font-weight: 700;
  }
`;

const ValueBalance = styled.p`
  color: ${(props) => (props.balance >= 0 ? COLORS.green : COLORS.red)};
`;
