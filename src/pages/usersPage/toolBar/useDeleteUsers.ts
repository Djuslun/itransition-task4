import { useDeleteUserMutation } from "entities/user"
import { useErrorMessage } from "shared/api";

interface IUseChangeAciveStatus {
  handleDeleteUsers: (userIds: string[])  => void
  isLoading:boolean
  isError:boolean
  errorMessage: string
}

export const useDeleteUsers = (): IUseChangeAciveStatus  => {
  const [deleteUsers, {isLoading, isError,error} ] = useDeleteUserMutation()
  const errorMessage = useErrorMessage(error)

  const handleDeleteUsers = (userIds :string[]) => {
    deleteUsers(userIds).unwrap()
  }

  return {handleDeleteUsers, isLoading, isError,errorMessage}
}