import { Form, Formik } from "formik";
import {
  InputBox,
  FormTitle,
  AuthFormWrapper,
  AuthFormLink,
  AuthButton,
  FormikField,
} from "shared/ui";

import { initialValues, validationSchema } from "./consts";

const LoginPage = ({}) => {
  return (
    <AuthFormWrapper>
      <FormTitle>Log in</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={({ password, email }) => console.log({ password, email })}
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
            label="Password"
            placeholder="••••••••"
            type="password"
            name="password"
          />

          <AuthButton>Log in</AuthButton>
          <AuthFormLink
            to="/registration"
            linkTitle="Do not have an account?"
            linkText="Create an account"
          />
        </Form>
      </Formik>
    </AuthFormWrapper>
  );
};

export default LoginPage;
