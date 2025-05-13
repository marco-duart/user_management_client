import { useState } from "react";
import toast from "react-hot-toast";
import { RegistrationService } from "../services/auth";
import { RegistrationDTO } from "../services/auth/DTO";

export const useRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerUser = async (data: RegistrationDTO.Params) => {
    setLoading(true);
    setError(null);

    try {
      const result = await RegistrationService(data);

      if (!result.success) {
        toast.error(result.message);
        setError(result.message);
        return result.success;
      }

      toast.success(result.message);
      return result.success;
    } catch (err) {
      toast.error("Erro ao registrar usuário.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    registerUser,
    loading,
    error,
  };
};
