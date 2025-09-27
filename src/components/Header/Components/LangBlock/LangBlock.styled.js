import styled from '@emotion/styled';

export const LangMenuWrapper = styled.div`
  position: relative;
`;

export const LangButton = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 32px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.white};
  transition: border-color ${({ theme }) => theme.baseTransition};

  & img {
    border: 2px solid ${({ theme }) => theme.colors.white};
  }

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    width: 40px;
    height: 40px;
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;
