import {
  InputBox,
  FormTitle,
  AuthFormWrapper,
  AuthFormLink,
  AuthButton,
} from "shared";

const RegistrationPage = ({}) => {
  return (
    <AuthFormWrapper>
      <FormTitle>Create an account</FormTitle>
      <form className="space-y-4 md:space-y-6">
        <InputBox
          label="Your email"
          placeholder="name@email.com"
          type="email"
        />
        <InputBox label="Your name" placeholder="Enter your name" type="name" />
        <InputBox label="Password" placeholder="••••••••" type="password" />
        <InputBox
          label="Confirm password"
          placeholder="••••••••"
          type="password"
          id="confirm-password"
        />
        <AuthButton>Create an account</AuthButton>
        <AuthFormLink
          to="/login"
          linkTitle="Already have an account?"
          linkText="Login here"
        />
      </form>
    </AuthFormWrapper>
  );
};

export default RegistrationPage;
