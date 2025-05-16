import styled from "styled-components";
import { Google } from "@styled-icons/boxicons-logos";

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme }) => theme.colors.common.white};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.default};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.secondary.light};
  }
`;

export const GoogleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const GoogleIcon = styled(Google)`
  width: ${({ theme }) => theme.typography.fontSize.sm};
  height: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.primary.dark};
`;