import * as S from "./styles";
import { UserDTO } from "../../services/user/DTO";

interface Props {
  user: UserDTO.Model;
  onEdit: () => void;
  onDelete: () => void;
}

const UserCard = ({ user, onDelete, onEdit }: Props) => {
  return (
    <S.CardContainer>
      <S.CardField>
        <S.CardLabel>Nome:</S.CardLabel>
        <S.CardValue>{user.name}</S.CardValue>
      </S.CardField>

      <S.CardField>
        <S.CardLabel>E-mail:</S.CardLabel>
        <S.CardValue>{user.email}</S.CardValue>
      </S.CardField>

      <S.CardField>
        <S.CardLabel>Perfil:</S.CardLabel>
        <S.RoleBadge $role={user.role}>
          {user.role === UserDTO.Role.ADMIN ? "Admin" : "Usuário"}
        </S.RoleBadge>
      </S.CardField>

      <S.CardField>
        <S.CardLabel>Status:</S.CardLabel>
        <S.StatusBadge $active={user.status}>
          {user.status === UserDTO.Status.ACTIVE ? "Ativo" : "Inativo"}
        </S.StatusBadge>
      </S.CardField>

      <S.CardActions>
        <S.EditButton onClick={() => onEdit()}>Editar</S.EditButton>
        <S.DeleteButton onClick={() => onDelete()}>Excluir</S.DeleteButton>
      </S.CardActions>
    </S.CardContainer>
  );
};

export default UserCard;
