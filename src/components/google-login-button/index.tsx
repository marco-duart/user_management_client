import { useAuthContext } from "../../hooks/use-auth-context";
import * as S from "./styles";

export const GoogleAuthButton = () => {
  const { loginWithGoogle } = useAuthContext();

  return (
    <S.GoogleButton onClick={loginWithGoogle}>
      <S.GoogleIcon />
      Continuar com Google
    </S.GoogleButton>
  );
};
