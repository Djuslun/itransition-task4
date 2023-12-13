import { useRefreshTokenQuery } from "entities/user"
import { useAppDispath } from "shared/api"
import { setUser, setAccsesToken } from "entities/user"
import { useEffect } from "react"
import { useErrorMessage } from "shared/api"

export const useRefreshToken = (): {isLoading :boolean, isError :boolean, errorMessage: string} => {
  const dispatch = useAppDispath()
  const {data: user, isLoading, isError, error} = useRefreshTokenQuery()
  const errorMessage = useErrorMessage(error)

  useEffect(()=> {
    if(!isLoading && user) {
      dispatch(setUser(user.user))
      dispatch(setAccsesToken(user.accessToken))
      localStorage.setItem('accessToken', user.accessToken)
    } 
  }, [isLoading, user])

  return {isLoading, isError, errorMessage}
}