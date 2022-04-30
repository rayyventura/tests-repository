import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

export default function Logo() {
  return (
    <Container>
      <img src={logo} alt="RepoProvas logo" />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;

  margin-bottom: 80px;

  @media (max-width: 700px) {
    img {
      width: 200px;
    }
  }
`;
