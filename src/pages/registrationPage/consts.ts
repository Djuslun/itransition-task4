import * as Yup from "yup";
import { emailRegExp } from "shared";

export const validationSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegExp, "Wrong email")
    .required("Requiered"),
  name: Yup.string().min(2, "Min 2 char").required("Requiered"),
  password: Yup.string().required("Requiered"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password doesn't match")
    .required("Requiered"),
})

export const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};