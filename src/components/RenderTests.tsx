import React, { useState } from "react";
import * as api from "../services/api";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";

export default function RenderTests({ display, test, reference }: any) {
  const { auth } = useAuth();
  const [views, setViews] = useState(test.views);

  function updateViews() {
    setViews(views + 1);
    api.updateViews(auth, test.id);
  }
  return (
    <Container display={display}>
      {reference && test ? (
        <>
          <p className="title">{test.category.name}</p>
          <div className="pdfUrl" onClick={() => updateViews()}>
            <a href={test.pdfUrl} target="_blank" className="link">
              {test.name} ({reference})
            </a>
            <a href={test.pdfUrl} target="_blank" className="views">
              {views} visualizações
            </a>
          </div>
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
  .pdfUrl {
    color: gray;
    font-size: 14px;
    display: flex;
    gap: 20px;
    a.views {
      color: #2164af;
    }
    &:hover .views {
      color: #438de2ae;
      a {
        cursor: pointer;
      }
    }
  }
  .link {
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
