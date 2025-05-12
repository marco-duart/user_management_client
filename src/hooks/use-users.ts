import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  GetUsersService,
  UpdateUserService,
  DeleteUserService,
} from "../services/user";
import { useAuthContext } from "./use-auth-context";
import { UserDTO, GetUsersDTO, UpdateUserDTO } from "../services/user/DTO";

export const useUsers = () => {
  const { token } = useAuthContext();

  const [users, setUsers] = useState<UserDTO.Model[]>([]);
  const [pagination, setPagination] =
    useState<GetUsersDTO.ResponsePagination | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async (
    params?: Omit<GetUsersDTO.Params, "token">
  ): Promise<void> => {
    if (!token) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await GetUsersService({ ...params, token });

      if (result.success && result.data) {
        setUsers(result.data.items);
        setPagination(result.data.meta);
      } else {
        setError(result.message);
        toast.error(result.message);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro desconhecido.";
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateUser = async (
    data: Omit<UpdateUserDTO.Params, "token">
  ): Promise<boolean> => {
    if (!token) return false;

    setIsLoading(true);

    try {
      const result = await UpdateUserService({ ...data, token });

      if (result.success) {
        toast.success(result.message);
        await fetchUsers();
        return true;
      } else {
        toast.error(result.message);
        return false;
      }
    } catch (err) {
      toast.error("Erro ao atualizar usuário.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (id: number): Promise<boolean> => {
    if (!token) return false;

    setIsLoading(true);

    try {
      const result = await DeleteUserService({ id, token });

      if (result.success) {
        toast.success(result.message);
        await fetchUsers();
        return true;
      } else {
        toast.error(result.message);
        return false;
      }
    } catch (err) {
      toast.error("Erro ao deletar usuário.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  return {
    users,
    pagination,
    isLoading,
    error,
    fetchUsers,
    updateUser,
    deleteUser,
  };
};
