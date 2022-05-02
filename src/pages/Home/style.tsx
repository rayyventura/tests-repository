import styled from "styled-components";

const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  align-self: flex-start;
`;
const Title = styled.h1<{ show: boolean }>`
  font-family: "Poppins";

  font-weight: 500;
  font-size: 24px;

  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.699);

  margin-bottom: 40px;

  display: ${(props) => (props.show ? "flex" : "none")};
`;
const HorizontalDivisor = styled.div`
  width: 100%;
  height: 1px;

  background-color: #c4c4c4;

  margin: 20px 0;
`;

const LowerContainer = styled.div`
  width: 700px;
`;

export { HorizontalDivisor, UpperContainer, LowerContainer, Title };
