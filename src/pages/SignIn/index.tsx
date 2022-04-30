import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import {
  Container,
  UpperContainer,
  LowerContainer,
  Form,
  InputField,
  Input,
  Button,
  StyledLink,
  Title,
} from "../../components/Form";
import Logo from "../../components/Logo";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAlert from "../../hooks/useAlert";

export default function SignIn() {
  const [hidePassword, setHidePassword] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { auth, signin } = useAuth();
  const { setMessage } = useAlert();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/home");
    } //eslint-disable-next-line
  }, [auth]);

  function handleChange({ target }: { target: any }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  function toggleHidePassword() {
    setHidePassword(!hidePassword);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    if (formData.password === "" || formData.email === "") {
      setMessage({
        type: "error",
        text: "Todos os campos devem estar preenchidos",
      });
      return;
    }

    try {
      const { data } = await api.signin(formData);
      signin(data.token);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setMessage({
        type: "error",
        text: "Login falhou,tente novamente!",
      });
    }
  }

  return (
    <Container>
      <Logo />
      <Title> Login </Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <UpperContainer>
          <InputField search="form">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={(e) => handleChange(e)}
              value={formData.email}
            />
          </InputField>
          <InputField search="form">
            <Input
              id="password"
              type={hidePassword ? "password" : "text"}
              placeholder="Senha"
              name="password"
              required
              onChange={(e) => handleChange(e)}
              value={formData.password}
            />
            <Icon
              icon={hidePassword ? eyeOff : eye}
              size={20}
              style={{ color: "#00000078" }}
              className="icon"
              onClick={() => toggleHidePassword()}
            />
          </InputField>
        </UpperContainer>
        <LowerContainer>
          <StyledLink to="/signup">Não possuo cadastro</StyledLink>
          <Button type="submit">
            {loading ? (
              <ThreeDots color="#FFFFFF" height={13} width={100} />
            ) : (
              "Confirmar"
            )}{" "}
          </Button>
        </LowerContainer>
      </Form>
    </Container>
  );
}
