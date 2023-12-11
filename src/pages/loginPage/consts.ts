import * as Yup from "yup";
import { emailRegExp } from "shared";

export const validationSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegExp, "Wrong email")
    .required("Requiered"),
  password: Yup.string().required("Requiered"),
})

export const initialValues = {
  email: '',
  password: ''
}