import {
  InputBox,
  FormTitle,
  AuthFormWrapper,
  AuthFormLink,
  AuthButton,
} from "shared";

const LoginPage = ({}) => {
  return (
    <AuthFormWrapper>
      <FormTitle>Log in</FormTitle>
      <form className="space-y-4 md:space-y-6">
        <InputBox
          label="Your email"
          placeholder="name@email.com"
          type="email"
        />
        <InputBox label="Password" placeholder="••••••••" type="password" />
        <AuthButton>Log in</AuthButton>
        <AuthFormLink
          to="/registration"
          linkTitle="Do not have an account?"
          linkText="Create an account"
        />
      </form>
    </AuthFormWrapper>
  );
};

export default LoginPage;
