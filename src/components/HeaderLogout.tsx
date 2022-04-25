import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { logOut } from "react-icons-kit/feather/logOut";
import { Icon } from "react-icons-kit";
import { useNavigate } from "react-router-dom";

export default function HeaderLogout() {
  const navigate = useNavigate();
  function signOut() {
    localStorage.removeItem("auth");
    window.location.reload();
  }

  return (
    <Container>
      <img src={Logo} alt="logo repoprovas" onClick={() => navigate("/home")} />
      <Icon
        icon={logOut}
        size={30}
        style={{ color: "#1976d2" }}
        className="icon"
        onClick={() => signOut()}
      />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;

  width: 100%;

  padding: 40px;
  img {
    width: 200px;
  }

  .icon {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    padding: 9px;
    margin-bottom: 12px;
    img {
      width: 160px;
    }
  }
`;
