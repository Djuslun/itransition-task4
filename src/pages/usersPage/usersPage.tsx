import { Table } from "./table/table";
import { useSelectRows } from "./useSelectRows";
import { useGetUsersQuery } from "entities/user";
import { useAppSelector } from "shared/api";
import { ToolBar } from "./toolBar/toolBar";
import { LogoutBar } from "./logoutBar/logoutBar";
import { Snackbar, Loader } from "shared/ui";
import { NavigateWithoutUser } from "./NavigateWithoutUser";

const UsersPage = () => {
  const { userIds, setUserIds } = useSelectRows();
  const { data, isLoading, isError } = useGetUsersQuery();
  const { user } = useAppSelector((store) => store.user);

  const userData = data?.map((user) => ({
    ...user,
    last_login: new Date(user.last_login),
  }));

  return (
    <NavigateWithoutUser user={user}>
      <Snackbar isOpen={isError} message="" />
      <Loader isLoading={isLoading} />
      <div className="flex justify-between  m-auto min-w-96 mb-4 md:flex-row flex-col-reverse gap-1">
        <ToolBar userIds={userIds as string[]} />
        <LogoutBar userName={user?.name as string} />
      </div>
      {userData && (
        <Table userData={userData} setUserIds={setUserIds} userIds={userIds} />
      )}
    </NavigateWithoutUser>
  );
};

export default UsersPage;
