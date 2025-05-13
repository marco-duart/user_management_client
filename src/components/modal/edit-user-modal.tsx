import React from "react";
import { EditUserForm } from "../forms/edit-user-form";
import * as S from "./styles";

interface Props {
  user: {
    id: number;
    name: string;
    email: string;
    role: "admin" | "user";
    status: "active" | "inactive";
  };
  onClose: () => void;
  onSave: (data: {
    name: string;
    role: "admin" | "user";
    status: "active" | "inactive";
  }) => Promise<void>;
  isLoading: boolean;
}

export const EditUserModal: React.FC<Props> = ({
  user,
  onClose,
  onSave,
  isLoading,
}) => {
  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>Editar Usuário</S.ModalTitle>
        </S.ModalHeader>
        <S.ModalBody>
          <EditUserForm
            user={user}
            onSubmit={onSave}
            onCancel={onClose}
            isLoading={isLoading}
          />
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
