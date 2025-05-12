import React from "react";
import { useForm } from "react-hook-form";
import { useRegistration } from "../../hooks/use-registration";
import {
  RegisterFormData,
  registerResolver,
} from "../../schemas/register-schema";
import { UserDTO } from "../../services/user/DTO";
import * as S from "./styles";
import LoadingSpinner from "../loading-spinner";

const RegisterForm: React.FC = () => {
  const { registerUser, loading, error } = useRegistration();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: registerResolver,
  });

  const onSubmit = async (data: RegisterFormData) => {
    await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      role: UserDTO.Role.USER,
    });
  };

  return (
    <>
      {loading && (
        <S.LoadingOverlay>
          <LoadingSpinner />
        </S.LoadingOverlay>
      )}

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <S.FormError style={{ textAlign: "center" }}>{error}</S.FormError>
        )}

        <S.FormGroup>
          <S.FormLabel htmlFor="name">Nome completo</S.FormLabel>
          <S.FormInput
            id="name"
            type="text"
            placeholder="Seu nome"
            {...register("name")}
          />
          {errors.name && <S.FormError>{errors.name.message}</S.FormError>}
        </S.FormGroup>

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

        <S.SubmitButton type="submit" disabled={loading}>
          {loading ? "Criando conta..." : "Criar conta"}
        </S.SubmitButton>
      </S.Form>
    </>
  );
};

export default RegisterForm;
