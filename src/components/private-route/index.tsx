import { useEffect } from "react";
import { useAuthContext } from "../../hooks/use-auth-context";
import { useNavigate } from "react-router-dom";
import { UserDTO } from "../../services/user/DTO";
import { ReactNode } from "react";

interface Props {
  requiredRole?: UserDTO.Role[];
  children?: ReactNode;
}

export const PrivateRoute = ({
  requiredRole = [UserDTO.Role.USER],
  children,
}: Props) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
      return;
    }

    if (requiredRole && !requiredRole.includes(user.role)) {
      navigate("/access-denied", { replace: true });
    }
  }, [user, requiredRole, navigate]);

  if (!user || (requiredRole && !requiredRole.includes(user.role))) {
    return null;
  }

  return <>{children}</>;
};
