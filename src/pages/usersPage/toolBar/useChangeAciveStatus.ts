import { useChangeActiveStatusMutation } from "entities/user"
import { useErrorMessage } from "shared/api";

interface IUseChangeAciveStatus {
  handleChangeUserStatus: ({ userIds, activeStatus}:{userIds: string[], activeStatus: boolean})  => void
  isLoading:boolean
  isError:boolean
  errorMessage: string
}

export const useChangeAciveStatus = (): IUseChangeAciveStatus => {
  const [changeStatus, {isLoading, isError,error} ] = useChangeActiveStatusMutation()
  const errorMessage = useErrorMessage(error)

  const handleChangeUserStatus = ({userIds,activeStatus}:{userIds :string[] , activeStatus: boolean}) => {
    changeStatus({userIds, activeStatus}).unwrap()
  }

  return {handleChangeUserStatus, isLoading, isError,errorMessage}
}

