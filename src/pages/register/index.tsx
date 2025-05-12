import React from "react";
import { useAuthContext } from "../../hooks/use-auth-context";
import RegisterForm from "../../components/forms/register-form";
import * as S from "./styles";

const RegisterPage: React.FC = () => {
  const { user, logout } = useAuthContext();

  React.useEffect(() => {
    if (user) {
      logout();
    }
  }, [user]);

  return (
    <S.RegisterPageContainer>
      <S.RegisterHeader>
        <S.RegisterTitle>Criar nova conta</S.RegisterTitle>
        <S.RegisterSubtitle>
          Preencha os campos abaixo para se registrar
        </S.RegisterSubtitle>
      </S.RegisterHeader>
      <RegisterForm />
      <S.RegisterFooter>
        Já tem uma conta?
        <S.RegisterLink href="/">Faça login</S.RegisterLink>
      </S.RegisterFooter>
    </S.RegisterPageContainer>
  );
};

export default RegisterPage;
