import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 464px;
  height: 100vh;
`;
const Title = styled.h1`
  font-family: "Poppins";

  font-weight: 500;
  font-size: 24px;

  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.699);

  margin-bottom: 40px;
`;
const UpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LowerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 30px;
  @media (max-width: 700px) {
    padding: 0 20px;
    button {
      width: 96px;
      height: 28px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  font-family: "Poppins", "sans-serif";
`;

const InputField = styled.div<{ search: string; show: boolean }>`
  padding: 12px;
  margin-bottom: 16px;
  width: 464px;

  padding-left: ${(props) => (props.search === "form" ? "0" : "20px")};

  border: ${(props) =>
    props.search === "form" ? "1px solid rgba(0, 0, 0, 0.23)" : "0"};
  box-sizing: border-box;
  border-radius: ${(props) => (props.search === "form" ? "4px" : "25px")};

  box-shadow: ${(props) =>
    props.search === "form" ? "0" : "0px 1px 2px rgba(0, 0, 0, 0.3)"};

  display: ${(props) => (props.show ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;

  .icon {
    cursor: pointer;
  }
  @media (max-width: 464px) {
    width: 100%;
  }
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  font-size: 14px;

  background-color: white;

  font-family: "Poppins";

  cursor: text;
`;

const Button = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1976d2;

  width: 116px;
  height: 36px;

  color: white;
  font-family: "Roboto", "sans-serif";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  cursor: pointer;

  :hover {
    font-size: 15px;
  }
`;
const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  color: #4673cacc;
  font-weight: 500;
  font-size: 12px;

  font-family: "Poppins", "sans-serif";

  text-decoration: underline;
`;

export {
  Container,
  UpperContainer,
  LowerContainer,
  Form,
  InputField,
  Input,
  Button,
  StyledLink,
  Title,
};
