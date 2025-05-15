import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProfileNameFormData,
  ProfilePasswordFormData,
  profileNameSchema,
  profilePasswordSchema,
} from "../../schemas/profile-schema";
import * as S from "./styles";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Props {
  user: {
    name: string;
    email: string;
    createdAt: string;
  };
  onNameSubmit: (data: ProfileNameFormData) => Promise<void>;
  onPasswordSubmit: (data: ProfilePasswordFormData) => Promise<void>;
  isLoading: boolean;
};

const ProfileForm: React.FC<Props> = ({
  user,
  onNameSubmit,
  onPasswordSubmit,
  isLoading,
}) => {
  const {
    register: registerName,
    handleSubmit: handleNameSubmit,
    formState: { errors: nameErrors },
    reset: resetNameForm,
  } = useForm<ProfileNameFormData>({
    resolver: zodResolver(profileNameSchema),
    defaultValues: {
      name: user.name,
    },
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    reset: resetPasswordForm,
  } = useForm<ProfilePasswordFormData>({
    resolver: zodResolver(profilePasswordSchema),
  });

  const handleNameCancel = () => {
    resetNameForm({ name: user.name });
  };

  const handlePasswordCancel = () => {
    resetPasswordForm();
  };

  return (
    <S.ProfileLayout>
      <S.ProfileHeader>
        <S.ProfileTitle>Configurações do Perfil</S.ProfileTitle>
        <S.ProfileDescription>
          Gerencie suas informações pessoais e configurações de segurança
        </S.ProfileDescription>
      </S.ProfileHeader>

      <S.ProfileContent>
        <S.ProfileCard>
          <S.CardHeader>
            <S.CardTitle>Informações Pessoais</S.CardTitle>
            <S.CardDescription>
              Atualize seu nome e detalhes da conta
            </S.CardDescription>
          </S.CardHeader>

          <S.CardBody>
            <S.EditForm onSubmit={handleNameSubmit(onNameSubmit)}>
              <S.FormGrid>
                <S.FormGroup>
                  <S.FormLabel>Nome completo</S.FormLabel>
                  <S.FormInput
                    type="text"
                    {...registerName("name")}
                    disabled={isLoading}
                    hasError={!!nameErrors.name}
                  />
                  {nameErrors.name && (
                    <S.FormError>{nameErrors.name.message}</S.FormError>
                  )}
                </S.FormGroup>

                <S.FormGroup>
                  <S.FormLabel>Endereço de e-mail</S.FormLabel>
                  <S.StaticValue>{user.email}</S.StaticValue>
                  <S.HelpText>
                    Não é possível alterar o e-mail através deste formulário.
                  </S.HelpText>
                </S.FormGroup>

                <S.FormGroup>
                  <S.FormLabel>Data de criação da conta</S.FormLabel>
                  <S.StaticValue>
                    {format(
                      new Date(user.createdAt),
                      "dd 'de' MMMM 'de' yyyy",
                      { locale: ptBR }
                    )}
                  </S.StaticValue>
                </S.FormGroup>
              </S.FormGrid>

              <S.FormActions>
                <S.CancelButton
                  type="button"
                  onClick={handleNameCancel}
                  disabled={isLoading}
                >
                  Cancelar
                </S.CancelButton>
                <S.SaveButton type="submit" disabled={isLoading}>
                  {isLoading ? "Salvando..." : "Salvar alterações"}
                </S.SaveButton>
              </S.FormActions>
            </S.EditForm>
          </S.CardBody>
        </S.ProfileCard>

        <S.ProfileCard>
          <S.CardHeader>
            <S.CardTitle>Segurança</S.CardTitle>
            <S.CardDescription>
              Altere sua senha para manter sua conta segura
            </S.CardDescription>
          </S.CardHeader>

          <S.CardBody>
            <S.EditForm onSubmit={handlePasswordSubmit(onPasswordSubmit)}>
              <S.FormGrid>
                <S.FormGroup>
                  <S.FormLabel>Nova senha</S.FormLabel>
                  <S.FormInput
                    type="password"
                    {...registerPassword("newPassword")}
                    disabled={isLoading}
                    placeholder="Digite sua senha atual"
                    hasError={!!passwordErrors.newPassword}
                  />
                  {passwordErrors.newPassword && (
                    <S.FormError>
                      {passwordErrors.newPassword.message}
                    </S.FormError>
                  )}
                </S.FormGroup>

                <S.FormGroup>
                  <S.FormLabel>Repita a senha</S.FormLabel>
                  <S.FormInput
                    type="password"
                    {...registerPassword("confirmPassword")}
                    disabled={isLoading}
                    placeholder="Digite a nova senha"
                    hasError={!!passwordErrors.confirmPassword}
                  />
                  {passwordErrors.confirmPassword && (
                    <S.FormError>
                      {passwordErrors.confirmPassword.message}
                    </S.FormError>
                  )}
                  <S.HelpText>
                    Sua senha deve ter pelo menos 8 caracteres
                  </S.HelpText>
                </S.FormGroup>
              </S.FormGrid>

              <S.FormActions>
                <S.CancelButton
                  type="button"
                  onClick={handlePasswordCancel}
                  disabled={isLoading}
                >
                  Cancelar
                </S.CancelButton>
                <S.SaveButton type="submit" disabled={isLoading}>
                  {isLoading ? "Salvando..." : "Alterar senha"}
                </S.SaveButton>
              </S.FormActions>
            </S.EditForm>
          </S.CardBody>
        </S.ProfileCard>
      </S.ProfileContent>
    </S.ProfileLayout>
  );
};

export default ProfileForm;
