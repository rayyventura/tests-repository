import React, { useState } from "react";
import styled from "styled-components";

export default function RenderTests({ display, test, reference }: any) {
  return (
    <Container display={display}>
      {reference ? (
        <>
          <p className="title">{test.category.name}</p>
          <p>
            {test.name} ({reference})
          </p>
        </>
      ) : (
        <p>Não há provas de nenhuma categoria para essa disciplina </p>
      )}
    </Container>
  );
}

const Container = styled.div<{ display: boolean }>`
  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding: 5px 20px;

  .title {
    font-weight: bold;
    color: #000000dc;
    font-size: 14px;
    margin-bottom: 5px;
  }
  p {
    color: #878787;
    font-size: 12px;
    font-family: "Poppins";
  }
`;
