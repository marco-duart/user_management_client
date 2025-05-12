import React from "react";
import { useAuthContext } from "../../hooks/use-auth-context";
import * as S from "./styles";

const Header: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo>User Management</S.Logo>

        {user && (
          <S.NavLinks>
            <S.NavLink disabled>Perfil</S.NavLink>
            <S.NavLink disabled>Usuários</S.NavLink>
            <S.NavLink as="button" onClick={logout}>
              Sair
            </S.NavLink>
          </S.NavLinks>
        )}
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
