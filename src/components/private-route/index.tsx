import { useEffect } from "react";
import { useAuthContext } from "../../hooks/use-auth-context";
import { useNavigate } from "react-router-dom";
import { UserDTO } from "../../services/user/DTO";
import { ReactNode } from "react";

interface Props {
  requiredRole: UserDTO.Role.USER | UserDTO.Role.ADMIN;
  children?: ReactNode;
}

export const PrivateRoute = ({ requiredRole, children }: Props) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else if (user.role !== requiredRole) {
      navigate("/access-denied");
    }
  }, [user, requiredRole, navigate]);

  return user?.role === requiredRole ? <>{children}</> : null;
};
