import { useRefreshTokenQuery } from "entities/user"
import { useAppDispath } from "shared/api"
import { setUser, setAccsesToken , logoutUser} from "entities/user"
import { useEffect } from "react"
import { useErrorMessage } from "shared/api"

export const useRefreshToken = (): {isLoading :boolean, isError :boolean, errorMessage: string} => {
  const dispatch = useAppDispath()
  const accessToken = localStorage.getItem('accessToken')
  const {data: user, isLoading, isError, error} = useRefreshTokenQuery('', {skip: !accessToken})
  const errorMessage = useErrorMessage(error)

  useEffect(()=> {
    if(!isLoading && user) {
      dispatch(setUser(user.user))
      dispatch(setAccsesToken(user.accessToken))
      localStorage.setItem('accessToken', user.accessToken)
    } 
  }, [isLoading, user])

  useEffect(()=>{
    if(isError) {
      localStorage.removeItem('accessToken')
      dispatch(logoutUser())
    }
  },[isError])

  return {isLoading, isError, errorMessage}
}