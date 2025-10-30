import styled from '@emotion/styled';

export const TextStyled = styled.p`
  font-size: 24px;
  line-height: 1;
  margin-block-end: 24px;
  text-align: center;
`;

export const DivItem = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const DivUserImgStyled = styled.div`
  width: 200px;
  height: 200px;
  margin-block-end: 25px;
  fill: ${({ theme }) => theme.colors.darkGray};
  & svg {
    border: 2px solid ${({ theme }) => theme.colors.darkGray};
    border-radius: 50%;
  }
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1;
`;

export const DivIconPlus = styled.div`
  position: absolute;
  bottom: 25px;
  right: 0;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${({ theme }) => theme.colors.primaryText};
`;
