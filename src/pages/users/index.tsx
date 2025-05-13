import UsersTable from "../../components/users-table";
import * as S from "./styles";

const UsersPage = () => {
  return (
    <S.PageContainer>
      <S.PageHeader>
        <S.PageTitle>Usuários</S.PageTitle>
      </S.PageHeader>

      <UsersTable />
    </S.PageContainer>
  );
};

export default UsersPage;
