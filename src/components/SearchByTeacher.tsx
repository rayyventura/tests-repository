import React, { useState } from "react";
import styled from "styled-components";
import { iosMinusEmpty } from "react-icons-kit/ionicons/iosMinusEmpty";
import { iosPlusEmpty } from "react-icons-kit/ionicons/iosPlusEmpty";
import Icon from "react-icons-kit";
import RenderTests from "./RenderTests";

export default function SearchByTeacher({ data }: any) {
  const [showTests, setShowTests] = useState(false);
  console.log(data);
  return (
    <Container>
      <UpperContainer>
        <p>{data.name}</p>
        <Icon
          icon={showTests ? iosMinusEmpty : iosPlusEmpty}
          size={28}
          style={{ color: "#000000" }}
          className="icon"
          onClick={() => setShowTests(!showTests)}
        />
      </UpperContainer>
      <InnerContainer display={showTests}>
        {data.teacherDiscipline[0] &&
          data.teacherDiscipline[0].tests.map((test: any) => {
            return (
              <RenderTests
                display={showTests}
                test={test}
                key={test.id}
                reference={data.teacherDiscipline[0].discipline.name}
              />
            );
          })}
        {!data.teacherDiscipline[0] && (
          <RenderTests
            display={showTests}
            test={false}
            key={data.id}
            teacher="dina"
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
