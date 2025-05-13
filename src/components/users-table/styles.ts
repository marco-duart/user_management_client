import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(4)};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const TableHead = styled.th`
  padding: ${({ theme }) => theme.spacing(3)};
  text-align: left;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCellContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ActionCell = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export const EditButton = styled.button`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  }
`;

export const DeleteButton = styled.button`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  }
`;

export const RoleBadge = styled.span<{ $role: string }>`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  background-color: ${({ theme, $role }) =>
    $role === "admin" ? theme.colors.primary.light : theme.colors.divider};
  color: ${({ theme, $role }) =>
    $role === "admin" ? theme.colors.common.white : theme.colors.text.primary};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  flex-wrap: wrap;
`;

export const PaginationButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.divider};
    cursor: not-allowed;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const PageInfo = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(8)};
`;

export const StatusBadge = styled.span<{ $active: "active" | "inactive" }>`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  background-color: ${({ theme, $active }) =>
    $active === "active" ? theme.colors.success : theme.colors.divider};
  color: ${({ theme, $active }) =>
    $active === "active" ? theme.colors.common.white : theme.colors.text.primary};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  flex-wrap: wrap;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.shape.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const FilterLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FilterSelect = styled.select`
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  background-color: ${({ theme }) => theme.colors.common.white};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const SortDirectionButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: background-color 0.2s;
  margin-left: ${({ theme }) => theme.spacing(2)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
