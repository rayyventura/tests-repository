import styled from "styled-components";

const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  align-self: flex-start;
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

export { HorizontalDivisor, UpperContainer, LowerContainer };
