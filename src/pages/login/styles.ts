import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: ${({ theme }) => theme.spacing(4)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing(8)};
  }
`;

export const LoginCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    padding: ${({ theme }) => theme.spacing(5)};
    border-radius: ${({ theme }) => theme.shape.borderRadius.lg};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: 28rem;
    padding: ${({ theme }) => theme.spacing(6)};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    max-width: 32rem;
    padding: ${({ theme }) => theme.spacing(8)};
  }
`;

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;

export const LoginTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  }
`;

export const LoginSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const LoginFooter = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const LoginLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  margin-left: ${({ theme }) => theme.spacing(1)};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
    text-decoration: underline;
  }
`;
