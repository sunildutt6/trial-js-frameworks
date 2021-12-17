import { useForm } from "react-hook-form";
import Heading from "../../components/layout/Heading";
import { WORDPRESS_URL, TOKEN } from "../../constants/api";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { schema } from "../../constants/Schema";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../constants/ValidationError";

const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-around;
  align-items: center;
  .form {
    width: 45%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const url = WORDPRESS_URL + TOKEN;
console.log(url);

function Login() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", ErrorEvent);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Container>
      <StyleForm>
        <Heading title=" Login Form" />
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          {loginError && <ValidationError>{loginError}</ValidationError>}
          <fieldset disabled={submitting}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" {...register("username")} />
              {errors.username && (
                <ValidationError>{errors.username.message}</ValidationError>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" {...register("username")} />
              {errors.username && (
                <ValidationError>{errors.password.message}</ValidationError>
              )}
            </Form.Group>

            <Button>{submitting ? "Loggin in" : "Login"}</Button>
          </fieldset>
        </Form>
      </StyleForm>
    </Container>
  );
}

export default Login;
