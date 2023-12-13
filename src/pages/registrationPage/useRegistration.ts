import { useRegistrationMutation } from "entities/user";
import { useErrorMessage } from "shared/api";
import { IUserRegistrationRequestBody } from "entities/user";
import { useNavigate } from "react-router-dom";

interface IUseRegistration {
  handleRegistration: ({ name, password, email }:IUserRegistrationRequestBody)  => void
  isLoading:boolean
  isError:boolean
  errorMessage: string
}

export const useRegistration = (): IUseRegistration => {
  const navigate = useNavigate()
  const [registration, { isLoading, isError, error }] =
  useRegistrationMutation();
  const errorMessage = useErrorMessage(error);

  const handleRegistration = ({ name, password, email }: IUserRegistrationRequestBody) => {
    registration({ name, password, email })
    .unwrap()
    .then(()=> navigate('/login'))
    .catch(e => console.log(e))
  }

  return {handleRegistration, isLoading, isError, errorMessage}
}