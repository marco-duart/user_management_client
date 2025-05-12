import styled from "styled-components";

export const RegisterPageContainer = styled.div`
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(6)};
  }
`;

export const RegisterHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const RegisterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  }
`;

export const RegisterSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const RegisterFooter = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const RegisterLink = styled.a`
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
