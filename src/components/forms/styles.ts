import styled from "styled-components";

export const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(6)};
    gap: ${({ theme }) => theme.spacing(10)};
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    padding: ${({ theme }) => theme.spacing(8)};
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    position: sticky;
    top: ${({ theme }) => theme.spacing(8)};
    width: 280px;
  }
`;

export const ProfileTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const ProfileDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  line-height: 1.5;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  flex: 1;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ProfileCard = styled.div`
  background: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.shape.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing(6)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing(1)} 0;
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing(6)};
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const FormGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FormInput = styled.input<{ hasError?: boolean }>`
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.error : theme.colors.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  background: ${({ theme }) => theme.colors.background.default};
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.light};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.divider};
    cursor: not-allowed;
  }
`;

export const StaticValue = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  background: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const HelpText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: ${({ theme }) => theme.spacing(1)} 0 0 0;
`;

export const FormError = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.error};
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const SaveButton = styled.button`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.divider};
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(6)};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.secondary};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.divider};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const SubmitButton = styled.button`
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.divider};
    cursor: not-allowed;
  }
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
