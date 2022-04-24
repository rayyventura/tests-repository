import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="RepoProvas logo" />
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
`;
