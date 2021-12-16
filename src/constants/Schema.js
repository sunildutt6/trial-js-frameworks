import * as yup from "yup";
import { MINIMUM_CHAR } from "../page/contact/contactRegistration";

export const schema = yup.object().shape({
  FirstName: yup
    .string()
    .required("Please enter your first name")
    .min(MINIMUM_CHAR, `Required minimum ${MINIMUM_CHAR} characters`),
  LastName: yup
    .string()
    .required("Please enter your Last name")
    .min(4, `Required minimum 4 characters`),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please write your message")
    .min(10, "Required minimum 10 characters."),
});
