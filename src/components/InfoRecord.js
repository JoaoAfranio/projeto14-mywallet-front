import styled from "styled-components";
import COLORS from "../constants/colors";

function InfoRecord(props) {
  const { date, description, value, type } = props;

  const floatValue = Number(value).toLocaleString("pt-br", { minimumFractionDigits: 2 });
  const day = date.split("/")[0];
  const month = date.split("/")[1];

  return (
    <Container>
      <div>
        <Date>
          {day}/{month}
        </Date>
        <Info>{description}</Info>
      </div>
      <Value type={type}>{floatValue}</Value>
    </Container>
  );
}

export default InfoRecord;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 9px 0px;
  gap: 3px;

  font-size: 16px;

  div {
    display: flex;
    gap: 10px;
  }
`;

const Date = styled.h1`
  color: ${COLORS.grey};
`;

const Info = styled.h1`
  color: #000000;
  font-weight: 700;
`;

const Value = styled.h1`
  color: ${(props) => (props.type === "output" ? COLORS.red : COLORS.green)};
`;
