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
import Header from "../../components/Header";
import * as api from "../../services/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordConfirm, setHidePasswordConfirm] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();

  function handleChange({ target }: { target: any }) {
    setFormData({ ...formData, [target.name]: target.value });
    console.log(formData);
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
      Swal.fire({
        text: "Senha e confirmação são diferentes",
        background: "#d66767",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
      });
      return;
    }
    if (
      formData.password === "" ||
      formData.passwordConfirm === "" ||
      formData.email === ""
    ) {
      Swal.fire({
        text: "Todos os dados devem estar preenchidos",
        background: "#d66767",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
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
      <Header />
      <Title> Cadastro </Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <UpperContainer>
          <InputField search="form">
            <Input
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
          <InputField search="form">
            <Input
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
          <Button type="submit"> Confirmar </Button>
        </LowerContainer>
      </Form>
    </Container>
  );
}
