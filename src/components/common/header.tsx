import React from "react";
import { useAuthContext } from "../../hooks/use-auth-context";
import { UserDTO } from "../../services/user/DTO";
import * as S from "./styles";

const Header: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo>User Management</S.Logo>

        {user && (
          <S.HeaderLinks>
            <S.HeaderLink to="/profile">Perfil</S.HeaderLink>
            {user && user.role === UserDTO.Role.ADMIN && (
              <S.HeaderLink to="/users">Usuários</S.HeaderLink>
            )}
            <S.HeaderButton as="button" onClick={logout}>
              Sair
            </S.HeaderButton>
          </S.HeaderLinks>
        )}
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
