import { Form, Formik } from "formik";
import {
  InputBox,
  FormTitle,
  AuthFormWrapper,
  AuthFormLink,
  AuthButton,
} from "shared";
import { initialValues, validationSchema } from "./consts";
import { FormikField } from "shared";

const RegistrationPage = ({}) => {
  return (
    <AuthFormWrapper>
      <FormTitle>Create an account</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={({ name, password, email }) =>
          console.log({ name, password, email })
        }
      >
        <Form className="space-y-4 md:space-y-6">
          <FormikField
            component={InputBox}
            label="Your email"
            placeholder="name@email.com"
            type="email"
            name="email"
          />
          <FormikField
            component={InputBox}
            label="Your name"
            placeholder="Enter your name"
            type="name"
            name="name"
          />
          <FormikField
            component={InputBox}
            label="Password"
            placeholder="••••••••"
            type="password"
            name="password"
          />
          <FormikField
            component={InputBox}
            label="Confirm password"
            placeholder="••••••••"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
          <AuthButton>Create an account</AuthButton>
          <AuthFormLink
            to="/login"
            linkTitle="Already have an account?"
            linkText="Login here"
          />
        </Form>
      </Formik>
    </AuthFormWrapper>
  );
};

export default RegistrationPage;
