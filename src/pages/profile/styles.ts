import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    padding: ${({ theme }) => theme.spacing(5)};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: 600px;
    margin-top: ${({ theme }) => theme.spacing(6)};
    padding: ${({ theme }) => theme.spacing(6)};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    max-width: 700px;
    padding: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const ProfileTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;

  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  }
`;
