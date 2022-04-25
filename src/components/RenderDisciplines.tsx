import React from "react";
import styled from "styled-components";
import { iosMinusEmpty } from "react-icons-kit/ionicons/iosMinusEmpty";
import { iosPlusEmpty } from "react-icons-kit/ionicons/iosPlusEmpty";
import Icon from "react-icons-kit";

export default function RenderDisciplines({
  showTests,
  showTest,
  discipline,
}: any) {
  return (
    <Container>
      <p>{discipline.name}</p>
      <Icon
        icon={showTest ? iosMinusEmpty : iosPlusEmpty}
        size={28}
        style={{ color: "#000000" }}
        className="icon"
        onClick={() => showTests()}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 16px;
  cursor: pointer;

  p {
    font-family: "Poppins";
    font-weight: 600px;
    font-size: 16px;
    color: #252525e2;
  }
  .icon {
    cursor: pointer;
  }
`;
