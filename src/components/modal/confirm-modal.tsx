import React from "react";
import * as S from "./styles";
import LoadingSpinner from "../loading-spinner";

interface Props {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading: boolean;
}

export const ConfirmModal: React.FC<Props> = ({
  title,
  message,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
  isLoading,
}) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <S.ModalOverlay onClick={onCancel}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
        </S.ModalHeader>
        <S.ModalBody>
          <S.ConfirmMessage>{message}</S.ConfirmMessage>
          <S.ConfirmButtons>
            <S.CancelButton onClick={onCancel}>{cancelText}</S.CancelButton>
            <S.ConfirmButton onClick={onConfirm}>{confirmText}</S.ConfirmButton>
          </S.ConfirmButtons>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
