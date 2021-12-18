import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../constants/Schema";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import Button from "react-bootstrap/Button";
import ValidationError from "../../constants/ValidationError";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Select from "react-select";
import { SUBJECT } from "./contactRegistration";

const StyleForm = styled.div`
  .form-control,
  .select-control {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
    reset();
  }
  return (
    <Container>
      <Heading title="Contact-US" />
      <StyleForm>
        {submitted && (
          <Alert variant="success" className="form-control">
            Thankx
          </Alert>
        )}
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="First Name"
              {...register("FirstName")}
              className="form-control"
            />
            {errors.FirstName && (
              <ValidationError>{errors.FirstName.message}</ValidationError>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Last Name"
              {...register("LastName")}
              className="form-control"
            />
            {errors.LastName && (
              <ValidationError>{errors.LastName.message}</ValidationError>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("email")}
              className="form-control"
            />
            {errors.email && (
              <ValidationError>{errors.email.message}</ValidationError>
            )}
          </Form.Group>

          <Form.Group
            className="mb-3 message-area"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              placeholder="Message"
              {...register("message")}
            />
            {errors.message && (
              <ValidationError>{errors.message.message}</ValidationError>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <Select
                  isMulti
                  options={SUBJECT}
                  {...field}
                  className="select-control"
                />
              )}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </StyleForm>
    </Container>
  );
}

export default Contact;
