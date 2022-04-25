import React from "react";
import styled from "styled-components";

export default function RenderTests({ display, test, reference }: any) {
  return (
    <Container display={display}>
      {reference && test ? (
        <>
          <p className="title">{test.category.name}</p>
          <a href={test.pdfUrl} target="_blank">
            {test.name} ({reference})
          </a>
        </>
      ) : (
        <p className="warn">
          Não há provas de nenhuma categoria para essa disciplina{" "}
        </p>
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
  a {
    color: #878787;
    font-size: 12px;
    font-family: "Poppins";

    &:visited {
      color: #ad0aced3;
    }
    &:hover {
      color: #1976d2;
    }
  }
  .warn {
    color: #222629c0;
    text-align: center;
    word-wrap: break-word;
  }
`;
