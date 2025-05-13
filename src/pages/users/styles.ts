import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(6)};
  }
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  }
`;

export const AddButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  align-self: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    align-self: center;
  }
`;