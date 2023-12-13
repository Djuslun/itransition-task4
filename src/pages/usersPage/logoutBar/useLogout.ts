import { useLogoutMutation } from "entities/user";
import { useAppDispath } from "shared/api";
import { logoutUser } from "entities/user";
import { useNavigate } from "react-router-dom";

interface IUseLogout {
  isLoading: boolean;
  isError: boolean;
  handleLogout: () => void
}

export const useLogout = ():IUseLogout => {
  const dispatch = useAppDispath()
  const navigate = useNavigate()
  const [logout, { isLoading, isError}] = useLogoutMutation();

  const handleLogout = () => {
    logout()
    .unwrap()
    .then(()=> {
      dispatch(logoutUser())
      localStorage.removeItem('accessToken')
      navigate('/login')
    })
    .catch(e => console.log(e))
  }

  return {handleLogout, isLoading, isError}
}