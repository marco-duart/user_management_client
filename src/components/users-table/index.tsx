import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  SortingState,
  PaginationState,
} from "@tanstack/react-table";
import { useUsers } from "../../hooks/use-users";
import * as S from "./styles";
import { GetUsersDTO, UserDTO } from "../../services/user/DTO";
import { useAuthContext } from "../../hooks/use-auth-context";
import { EditUserModal } from "../modal/edit-user-modal";
import { ConfirmModal } from "../modal/confirm-modal";

const UsersTable = () => {
  const { users, pagination, isLoading, fetchUsers, updateUser, deleteUser } =
    useUsers();
  const { isAdmin } = useAuthContext();

  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "name", desc: false },
  ]);

  const [paginationState, setPaginationState] = React.useState<PaginationState>(
    {
      pageIndex: 0,
      pageSize: 10,
    }
  );
  const [roleFilter, setRoleFilter] = React.useState<UserDTO.Role | "all">(
    "all"
  );
  const [editingUser, setEditingUser] = React.useState<UserDTO.Model | null>(
    null
  );
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [deletingUserId, setDeletingUserId] = React.useState<number | null>(
    null
  );
  const [isDeleting, setIsDeleting] = React.useState(false);

  const columns: ColumnDef<UserDTO.Model>[] = [
    {
      accessorKey: "name",
      header: "Nome",
      cell: (info) => info.getValue() as string,
      enableSorting: true,
    },
    {
      accessorKey: "email",
      header: "E-mail",
      cell: (info) => info.getValue() as string,
      enableSorting: false,
    },
    {
      accessorKey: "role",
      header: "Perfil",
      cell: (info) => (
        <S.RoleBadge $role={info.getValue() as UserDTO.Role}>
          {info.getValue() === UserDTO.Role.ADMIN ? "Admin" : "Usuário"}
        </S.RoleBadge>
      ),
      enableSorting: false,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => (
        <S.StatusBadge $active={info.getValue() as UserDTO.Status}>
          {info.getValue() === UserDTO.Status.ACTIVE ? "Ativo" : "Inativo"}
        </S.StatusBadge>
      ),
      enableSorting: false,
    },
    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) =>
        isAdmin() && (
          <S.ActionCell>
            <S.EditButton onClick={() => setEditingUser(row.original)}>
              Editar
            </S.EditButton>
            <S.DeleteButton onClick={() => setDeletingUserId(row.original.id)}>
              Excluir
            </S.DeleteButton>
          </S.ActionCell>
        ),
      enableSorting: false,
    },
  ];

  React.useEffect(() => {
    const sort = sorting[0] || { id: "name", desc: false };

    fetchUsers({
      page: paginationState.pageIndex + 1,
      limit: paginationState.pageSize,
      role: roleFilter !== "all" ? roleFilter : undefined,
      sortBy:
        sort.id === "name"
          ? GetUsersDTO.SortBy.NAME
          : GetUsersDTO.SortBy.CREATED_AT,
      order: sort.desc ? GetUsersDTO.Order.DESC : GetUsersDTO.Order.ASC,
    });
  }, [paginationState, sorting, roleFilter]);

  const table = useReactTable({
    data: users,
    columns,
    state: {
      sorting,
      pagination: paginationState,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPaginationState,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: pagination?.totalPages || 1,
  });
  const handleSave = async (data: {
    name: string;
    role: "admin" | "user";
    status: "active" | "inactive";
  }) => {
    if (!editingUser) return;

    setIsUpdating(true);
    await updateUser({
      id: editingUser.id,
      ...data,
    });
    setEditingUser(null);
  };

  const handleDelete = async () => {
    if (!deletingUserId) return;

    setIsDeleting(true);
    await deleteUser(deletingUserId);
    setDeletingUserId(null);
  };

  if (isLoading) {
    return <S.LoadingSpinner />;
  }

  return (
    <>
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
          isLoading={isUpdating}
        />
      )}

      {deletingUserId !== null && (
        <ConfirmModal
          title="Confirmação de exclusão"
          message="Tem certeza que deseja excluir este usuário?"
          onConfirm={() => handleDelete()}
          onCancel={() => setDeletingUserId(null)}
          isLoading={isDeleting}
        />
      )}

      <S.FiltersContainer>
        <S.FilterGroup>
          <S.FilterLabel>Filtrar por perfil:</S.FilterLabel>
          <S.FilterSelect
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(e.target.value as UserDTO.Role | "all")
            }
          >
            <option value="all">Todos</option>
            <option value={UserDTO.Role.ADMIN}>Administrador</option>
            <option value={UserDTO.Role.USER}>Usuário</option>
          </S.FilterSelect>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.FilterLabel>Ordenar por:</S.FilterLabel>
          <S.FilterSelect
            value={sorting[0]?.id || "name"}
            onChange={(e) => {
              const currentSort = sorting[0];
              setSorting([
                {
                  id: e.target.value,
                  desc:
                    currentSort?.id === e.target.value
                      ? !currentSort.desc
                      : false,
                },
              ]);
            }}
          >
            <option value="name">Nome</option>
            <option value="createdAt">Data de criação</option>
          </S.FilterSelect>

          <S.SortDirectionButton
            onClick={() => {
              setSorting([
                {
                  id: sorting[0]?.id || "name",
                  desc: !sorting[0]?.desc,
                },
              ]);
            }}
          >
            {sorting[0]?.desc ? "🔽 Descendente" : "🔼 Ascendente"}
          </S.SortDirectionButton>
        </S.FilterGroup>
      </S.FiltersContainer>

      <S.TableContainer>
        <S.Table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <S.TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <S.TableHead
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <S.HeaderContent>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </S.HeaderContent>
                  </S.TableHead>
                ))}
              </S.TableRow>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <S.TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    <S.TableCellContainer>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </S.TableCellContainer>
                  </td>
                ))}
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>

        <S.PaginationContainer>
          <S.PaginationButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </S.PaginationButton>

          <S.PageInfo>
            Página {paginationState.pageIndex + 1} de{" "}
            {pagination?.totalPages || 1}
          </S.PageInfo>

          <S.PaginationButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próxima
          </S.PaginationButton>
        </S.PaginationContainer>
      </S.TableContainer>
    </>
  );
};

export default UsersTable;
