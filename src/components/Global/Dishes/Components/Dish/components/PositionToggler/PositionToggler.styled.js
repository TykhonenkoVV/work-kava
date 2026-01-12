import styled from '@emotion/styled';

export const PositionTogglerWrapper = styled.button`
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.accent};
  transition: background-color ${({ theme }) => theme.baseTransition},
    color ${({ theme }) => theme.baseTransition};
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkButtonHover};
    color: ${({ theme }) => theme.colors.white};
  }
`;
