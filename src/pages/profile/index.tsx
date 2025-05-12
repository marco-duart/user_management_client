import { useState } from "react";
import { useAuthContext } from "../../hooks/use-auth-context";
import { useUsers } from "../../hooks/use-users";
import LoadingSpinner from "../../components/loading-spinner";
import ProfileForm from "../../components/forms/profile-form";
import * as S from "./styles";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
  const { user, refreshUser } = useAuthContext();
  const { updateUser } = useUsers();
  const [isLoading, setIsLoading] = useState(false);

  if (!user) {
    return <LoadingSpinner />;
  }

  const handleNameSubmit = async (data: { name: string }) => {
    setIsLoading(true);
    try {
      const success = await updateUser({
        id: user.id,
        name: data.name,
      });

      if (success) {
        await refreshUser();
        toast.success("Nome atualizado com sucesso!");
      }
    } catch (error) {
      toast.error("Erro ao atualizar nome");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (data: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    setIsLoading(true);
    try {
      const success = await updateUser({
        id: user.id,
        name: user.name,
        password: data.newPassword,
      });

      if (success) {
        toast.success("Senha alterada com sucesso!");
      }
    } catch (error) {
      toast.error("Erro ao alterar senha. Verifique sua senha atual.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <title>Meu Perfil</title>

      <S.ProfileContainer>
        <ProfileForm
          user={user}
          onNameSubmit={handleNameSubmit}
          onPasswordSubmit={handlePasswordSubmit}
          isLoading={isLoading}
        />
      </S.ProfileContainer>
    </>
  );
};

export default ProfilePage;
