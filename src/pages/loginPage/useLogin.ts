import { useErrorMessage } from "shared/api";
import { IUserLoginRequestBody, useLoginMutation, setAccsesToken,setErrorMessage,setUser } from "entities/user";
import { useAppDispath } from "shared/api";
import { useNavigate } from "react-router-dom";

interface IUseLogin {
  isLoading: boolean
  isError: boolean
  errorMessage: string
  handleLogin: ({password, email}: IUserLoginRequestBody)  => void
}

export const useLogin = (): IUseLogin => {
  const navigate = useNavigate()
  const dispatch = useAppDispath()
  const [login, { isLoading, error, isError }] = useLoginMutation();
  const errorMessage = useErrorMessage(error);

  const handleLogin = ({ password, email }: IUserLoginRequestBody) => {
    login({ password, email })
              .unwrap()
              .then(user => {
                dispatch(setUser(user.user));
                dispatch(setAccsesToken(user.accessToken));
                localStorage.setItem("accessToken" ,user.accessToken);
                navigate('/users')
              })
              .catch((e) => setErrorMessage(e.message));
  }

  return {isLoading,isError,errorMessage, handleLogin}
}