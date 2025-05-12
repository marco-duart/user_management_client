import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/use-auth-context";
import LoginForm from "../../components/forms/login-form";
import LoadingSpinner from "../../components/loading-spinner";
import * as S from "./styles";

const LoginPage: React.FC = () => {
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user && user.role === "admin") {
      navigate("/users");
    }
    if (user && user.role === "user") {
      navigate("/profile");
    }
  }, [user, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <S.LoginPageContainer>
      <S.LoginCard>
        <S.LoginHeader>
          <S.LoginTitle>Bem-vindo de volta</S.LoginTitle>
          <S.LoginSubtitle>
            Por favor, insira suas credenciais para acessar sua conta
          </S.LoginSubtitle>
        </S.LoginHeader>
        <LoginForm />
        <S.LoginFooter>
          Não tem uma conta?
          <S.LoginLink href="/register">Crie uma agora</S.LoginLink>
        </S.LoginFooter>
      </S.LoginCard>
    </S.LoginPageContainer>
  );
};

export default LoginPage;
