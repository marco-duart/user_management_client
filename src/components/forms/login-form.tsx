import React from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../hooks/use-auth-context";
import { LoginFormData, loginResolver } from "../../schemas/login-schema";
import * as S from "./styles";
import LoadingSpinner from "../loading-spinner";
import { GoogleAuthButton } from "../google-login-button";

const LoginForm: React.FC = () => {
  const { login, loading: authLoading } = useAuthContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: loginResolver,
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await login(data.email, data.password);
      if (!success) {
        setError("Credenciais inválidas. Por favor, tente novamente.");
      }
    } catch (err) {
      setError("Ocorreu um erro ao fazer login. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {isLoading && (
        <S.LoadingOverlay>
          <LoadingSpinner />
        </S.LoadingOverlay>
      )}

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <S.FormError style={{ textAlign: "center", marginBottom: "1rem" }}>
            {error}
          </S.FormError>
        )}

        <S.FormGroup>
          <S.FormLabel htmlFor="email">E-mail</S.FormLabel>
          <S.FormInput
            id="email"
            type="email"
            placeholder="seu@email.com"
            {...register("email")}
          />
          {errors.email && <S.FormError>{errors.email.message}</S.FormError>}
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel htmlFor="password">Senha</S.FormLabel>
          <S.FormInput
            id="password"
            type="password"
            placeholder="••••••"
            {...register("password")}
          />
          {errors.password && (
            <S.FormError>{errors.password.message}</S.FormError>
          )}
        </S.FormGroup>

        <S.SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </S.SubmitButton>
        <S.Divider>
          <span>ou</span>
        </S.Divider>
        <GoogleAuthButton />
      </S.Form>
    </>
  );
};

export default LoginForm;
