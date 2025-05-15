import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const CardField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const CardLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CardValue = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: right;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
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
    $active === "active"
      ? theme.colors.common.white
      : theme.colors.text.primary};
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
`;
