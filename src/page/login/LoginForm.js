import { URL } from "../../constants/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { schemaLogin } from "../../constants/Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import ValidationError from "../../constants/ValidationError";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";

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

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(URL, data);
      console.log(response.data);
    } catch (error) {
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <StyleForm>
      <Heading title="Login Form" />
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
            <Form.Control type="text" {...register("password")} />
            {errors.password && (
              <ValidationError>{errors.password.message}</ValidationError>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            {submitting ? "Logging-in" : "Login"}
          </Button>
        </fieldset>
      </Form>
    </StyleForm>
  );
}

export default LoginForm;
