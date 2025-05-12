export namespace UserDTO {
  export enum Role {
    ADMIN = "admin",
    USER = "user",
  }
  export interface Model {
    id: number;
    name: string;
    email: string;
    role: Role;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  }
}

export namespace GetUsersDTO {
  export enum SortBy {
    NAME = "name",
    CREATED_AT = "createdAt",
  }
  export enum Order {
    ASC = "asc",
    DESC = "desc",
  }
  export type Params = {
    sortBy?: SortBy;
    order?: Order;
    role?: UserDTO.Role;
  };
  export type Response = UserDTO.Model[];
}

export namespace UpdateUserDTO {
  export type Params = {
    id: number;
    name: string;
    email: string;
    role: UserDTO.Role;
  };
  export type Response = UserDTO.Model;
}

export namespace DeleteUserDTO {
  export type Params = {
    id: number;
  };
  export type Response = {
    response: string;
  };
}
