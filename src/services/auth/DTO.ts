import { UserDTO } from "../user/DTO";

export namespace LoginDTO {
  export type Params = {
    email: string;
    password: string;
  };
  export type Response = {
    token: string;
  };
}

export namespace RegistrationDTO {
  export type Params = {
    name: string;
    email: string;
    password: string;
    role?: UserDTO.Role;
  };
  export type Response = UserDTO.Model;
}

export namespace MeDTO {
  export type Params = {
    token: string;
  };
  export type Response = UserDTO.Model;
}
