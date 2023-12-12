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
import { useRegistrationMutation } from "entities/user";
import { Snackbar } from "shared/ui";
import { useErrorMessage } from "shared/api";

const RegistrationPage = ({}) => {
  const [registration, { isLoading, isError, error }] =
    useRegistrationMutation();
  const errorMessage = useErrorMessage(error);

  return (
    <>
      <AuthFormWrapper>
        <FormTitle>Create an account</FormTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={({ name, password, email }) => {
            registration({ name, password, email })
              .unwrap()
              .catch((e) => console.log(e.message));
          }}
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
      <Snackbar isOpen={isError} message={errorMessage} />
    </>
  );
};
// };

export default RegistrationPage;
