import { isAxiosError } from "axios";
import api from "../../config/api";
import { LoginDTO, RegistrationDTO, MeDTO } from "./DTO";

export const LoginService = async (params: LoginDTO.Params) => {
  try {
    const response = await api.post<LoginDTO.Response>("/auth/login", params);

    return {
      success: true,
      message: "Login realizado com sucesso!",
      data: {
        token: response.data.token,
      },
    };
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Erro na requisição:", error);

      return {
        success: false,
        message: error.message,
        code: error.response?.status || 500,
      };
    }

    console.error("Erro desconhecido:", error);

    return {
      success: false,
      message: "Erro desconhecido!",
      code: 500,
    };
  }
};

export const RegistrationService = async (params: RegistrationDTO.Params) => {
  try {
    const response = await api.post<RegistrationDTO.Response>(
      "/auth/register",
      params
    );

    return {
      success: true,
      message: "Registro realizado com sucesso!",
      data: {
        user: response.data,
      },
    };
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Erro na requisição:", error);

      return {
        success: false,
        message: error.message,
        code: error.response?.status || 500,
      };
    }

    console.error("Erro desconhecido:", error);

    return {
      success: false,
      message: "Erro desconhecido!",
      code: 500,
    };
  }
};

export const MeService = async (params: MeDTO.Params) => {
  try {
    const { token } = params;
    const response = await api.get<MeDTO.Response>("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      success: true,
      message: "Informações recuperadas com sucesso!",
      data: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Erro na requisição:", error);

      return {
        success: false,
        message: error.message,
        code: error.response?.status || 500,
      };
    }

    console.error("Erro desconhecido:", error);

    return {
      success: false,
      message: "Erro desconhecido!",
      code: 500,
    };
  }
};
