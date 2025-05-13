import React from "react";
import { useForm } from "react-hook-form";
import {
  UpdateUserFormData,
  updateUserSchema,
} from "../../schemas/update-user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "../forms/styles";

interface Props {
  user: {
    id: number;
    name: string;
    email: string;
    role: "admin" | "user";
    status: "active" | "inactive";
  };
  onSubmit: (data: UpdateUserFormData) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

export const EditUserForm: React.FC<Props> = ({
  user,
  onSubmit,
  onCancel,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserFormData>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: user.name,
      role: user.role,
      status: user.status,
    },
  });

  return (
    <S.EditForm onSubmit={handleSubmit(onSubmit)}>
      <S.FormGrid>
        <S.FormGroup>
          <S.FormLabel>ID</S.FormLabel>
          <S.StaticValue>{user.id}</S.StaticValue>
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel>E-mail</S.FormLabel>
          <S.StaticValue>{user.email}</S.StaticValue>
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel htmlFor="name">Nome</S.FormLabel>
          <S.FormInput
            id="name"
            type="text"
            placeholder="Nome completo"
            hasError={!!errors.name}
            {...register("name")}
          />
          {errors.name && <S.FormError>{errors.name.message}</S.FormError>}
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel htmlFor="role">Perfil</S.FormLabel>
          <S.FormInput
            as="select"
            id="role"
            hasError={!!errors.role}
            {...register("role")}
          >
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </S.FormInput>
          {errors.role && <S.FormError>{errors.role.message}</S.FormError>}
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel htmlFor="status">Status</S.FormLabel>
          <S.FormInput
            as="select"
            id="status"
            hasError={!!errors.status}
            {...register("status")}
          >
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </S.FormInput>
          {errors.status && <S.FormError>{errors.status.message}</S.FormError>}
        </S.FormGroup>
      </S.FormGrid>

      <S.FormActions>
        <S.CancelButton type="button" onClick={onCancel} disabled={isLoading}>
          Cancelar
        </S.CancelButton>
        <S.SaveButton type="submit" disabled={isLoading}>
          {isLoading ? "Salvando..." : "Salvar alterações"}
        </S.SaveButton>
      </S.FormActions>
    </S.EditForm>
  );
};
