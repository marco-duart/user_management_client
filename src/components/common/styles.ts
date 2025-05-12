import styled from "styled-components";

export const BaseLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.common.white};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing(3)};
  position: sticky;
  top: 0;
  z-index: 100;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    max-width: 1200px;
  }
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.main};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export const NavLink = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.text.secondary : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.primary.light};
    color: ${({ theme, disabled }) =>
      !disabled && theme.colors.common.white};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(3)};
  max-width: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(5)};
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    max-width: 1200px;
    padding: ${({ theme }) => theme.spacing(6)};
  }
`;
