import { useChangeActiveStatusMutation } from "entities/user"

export const useChangeAciveStatus = (usersIds: string[], status: boolean) => {
  const [changeStatus, isLoading] = useChangeActiveStatusMutation()

  const handleChangeUserStatus = () => {
    
  }

  return 
}

