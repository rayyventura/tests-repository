import React, { useState } from "react";
import styled from "styled-components";
import { iosMinusEmpty } from "react-icons-kit/ionicons/iosMinusEmpty";
import { iosPlusEmpty } from "react-icons-kit/ionicons/iosPlusEmpty";
import Icon from "react-icons-kit";
import RenderDisciplines from "./RenderDisciplines";
import RenderTests from "./RenderTests";

export default function SearchByDiscipline({ selectDisciplines, data }: any) {
  const [showDisciplines, setShowDisciplines] = useState(false);
  const [showTests, setShowTests] = useState(false);
  const teacherName = data.disciplines[0].teacherDiscipline[0]?.teacher.name;

  function toggleShowDisciplines() {
    setShowDisciplines(!showDisciplines);
    showDisciplines && setShowTests(false);
  }
  function toggleShowTests() {
    setShowTests(!showTests);
  }

  return (
    <Container>
      <UpperContainer>
        <p>{data.number}º Período</p>
        <Icon
          icon={showDisciplines ? iosMinusEmpty : iosPlusEmpty}
          size={28}
          style={{ color: "#000000" }}
          className="icon"
          onClick={() => toggleShowDisciplines()}
        />
      </UpperContainer>
      <LowerContainer display={showDisciplines}>
        {data.disciplines.map((discipline: any) => {
          return (
            <RenderDisciplines
              showTests={toggleShowTests}
              showTest={showTests}
              discipline={discipline}
              key={discipline.term.id}
            />
          );
        })}
      </LowerContainer>
      <InnerContainer display={showTests}>
        {data.disciplines[0].teacherDiscipline[0] &&
          data.disciplines[0].teacherDiscipline[0].tests.map(
            (test: any, i: number) => {
              return (
                <RenderTests
                  display={showTests}
                  test={test}
                  key={i}
                  reference={teacherName}
                />
              );
            }
          )}
        {!data.disciplines[0].teacherDiscipline[0] && (
          <RenderTests
            display={showTests}
            test={false}
            key={data.id}
            reference={teacherName}
          />
        )}
        {data.disciplines[0].teacherDiscipline[0] &&
          !data.disciplines[0].teacherDiscipline[0].tests[0] && (
            <RenderTests
              display={showTests}
              test={false}
              key={data.id}
              reference={teacherName}
            />
          )}
      </InnerContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 700px;

  padding: 5px 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);

  margin-bottom: 16px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const UpperContainer = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  p {
    font-family: "Poppins";
    font-weight: 600px;
    font-size: 16px;
    color: #252525c3;
  }
  .icon {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const LowerContainer = styled.div<{ display: boolean }>`
  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 5px 20px;
`;
const InnerContainer = styled.div<{ display: boolean }>`
  display: ${(props) => (props.display ? "flex" : "none")};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  flex-direction: column;

  padding: 5px 25px;
`;
