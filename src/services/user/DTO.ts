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
    ASC = "ASC",
    DESC = "DESC",
  }
  export type ResponsePagination = {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
  };
  export type Params = {
    page?: number;
    limit?: number;
    sortBy?: SortBy;
    order?: Order;
    role?: UserDTO.Role;
    token: string;
  };
  export type Response = {
    items: UserDTO.Model[];
    meta: ResponsePagination;
  };
}

export namespace UpdateUserDTO {
  export type Params = {
    id: number;
    name?: string;
    password?: string;
    token: string;
  };
  export type Response = UserDTO.Model;
}

export namespace DeleteUserDTO {
  export type Params = {
    id: number;
    token: string;
  };
  export type Response = {
    response: string;
  };
}
