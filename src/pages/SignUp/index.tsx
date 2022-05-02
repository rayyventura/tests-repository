import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import useAlert from "../../hooks/useAlert";

export default function SignUp() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordConfirm, setHidePasswordConfirm] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();
  const { setMessage } = useAlert();

  function handleChange({ target }: { target: any }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  function toggleHidePassword() {
    setHidePassword(!hidePassword);
  }
  function toggleHidePasswordConfirm() {
    setHidePasswordConfirm(!hidePasswordConfirm);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      setMessage({
        type: "error",
        text: "Senha e confirmação são diferentes",
      });
      return;
    }
    if (
      formData.password === "" ||
      formData.passwordConfirm === "" ||
      formData.email === ""
    ) {
      setMessage({
        type: "error",
        text: "Todos os campos devem estar preenchidos",
      });
      return;
    }
    try {
      api.createUser({ email: formData.email, password: formData.password });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container>
      <Logo />
      <Title> Cadastro </Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <UpperContainer>
          <InputField search="form" show={false}>
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
          <InputField search="form" show={false}>
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
          <InputField search="form" show={false}>
            <Input
              id="passwordConfirm"
              type={hidePasswordConfirm ? "password" : "text"}
              placeholder="Confirme sua senha"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              required
              onChange={(e) => handleChange(e)}
            />
            <Icon
              icon={hidePasswordConfirm ? eyeOff : eye}
              size={20}
              style={{ color: "#00000078" }}
              className="icon"
              onClick={() => toggleHidePasswordConfirm()}
            />
          </InputField>
        </UpperContainer>
        <LowerContainer>
          <StyledLink to="/">Já possuo cadastro</StyledLink>
          <Button type="submit" id="submit">
            {" "}
            Confirmar{" "}
          </Button>
        </LowerContainer>
      </Form>
    </Container>
  );
}
