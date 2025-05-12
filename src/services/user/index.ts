import { isAxiosError } from "axios";
import api from "../../config/api";
import qs from "qs";
import { GetUsersDTO, UpdateUserDTO, DeleteUserDTO } from "./DTO";

export const UpdateUserService = async (params: UpdateUserDTO.Params) => {
  try {
    const { token, id, ...data } = params;

    const response = await api.patch<UpdateUserDTO.Response>(
      `/users/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return {
      success: true,
      message: "Usuário atualizado com sucesso!",
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

export const DeleteUserService = async (params: DeleteUserDTO.Params) => {
  try {
    const { token, id } = params;

    await api.delete<DeleteUserDTO.Response>(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      success: true,
      message: "Usuário deletado com sucesso!",
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

export const GetUsersService = async (params: GetUsersDTO.Params) => {
  try {
    const { token, sortBy, order, role, page, limit } = params;

    const queryParams = qs.stringify(
      {
        page,
        limit,
        sortBy,
        order,
        role,
      },
      { skipNulls: true }
    );

    const response = await api.get<GetUsersDTO.Response>(
      `/users?${queryParams}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return {
      success: true,
      message: "Lista de usuários recuperada com sucesso!",
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
