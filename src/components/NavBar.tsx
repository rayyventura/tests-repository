import React, { useState } from "react";
import styled from "styled-components";

export default function NavBar({
  selectDisciplines,
  setSelectDisciplines,
  selectTeachers,
  setSelectTeachers,
  selectAdd,
  setSelectAdd,
}: any) {
  function toggleSelection(
    variable: boolean,
    setVariable: any,
    firstAux: any,
    secondAux: any
  ) {
    setVariable(!variable);
    firstAux(false);
    secondAux(false);
  }
  return (
    <Container
      disciplines={selectDisciplines}
      teacher={selectTeachers}
      add={selectAdd}
    >
      <div
        onClick={() =>
          toggleSelection(
            selectDisciplines,
            setSelectDisciplines,
            setSelectTeachers,
            setSelectAdd
          )
        }
        className="disciplines"
      >
        Disciplinas
      </div>
      <div
        onClick={() =>
          toggleSelection(
            selectTeachers,
            setSelectTeachers,
            setSelectDisciplines,
            setSelectAdd
          )
        }
        className="teachers"
      >
        Professores
      </div>
      <div
        onClick={() =>
          toggleSelection(
            selectAdd,
            setSelectAdd,
            setSelectDisciplines,
            setSelectTeachers
          )
        }
        className="add"
      >
        Adicionar
      </div>
    </Container>
  );
}
const Container = styled.nav<{
  disciplines: boolean;
  teacher: boolean;
  add: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;

  margin: 35px 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 119px;
    height: 36px;

    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    border-radius: 4px;

    font-family: "Roboto", "sans-serif";

    cursor: pointer;
    background-color: white;
    color: #1976d2;
    &:hover {
      background-color: #1976d2;
      color: white;
    }
  }
  .disciplines {
    background-color: ${(props) => (props.disciplines ? "#1976d2" : "white")};
    color: ${(props) => (props.disciplines ? "white" : "#1976d2")};
  }
  .teachers {
    background-color: ${(props) => (props.teacher ? "#1976d2" : "white")};
    color: ${(props) => (props.teacher ? "white" : "#1976d2")};
  }
  .add {
    background-color: ${(props) => (props.add ? "#1976d2" : "white")};
    color: ${(props) => (props.add ? "white" : "#1976d2")};
  }
`;
