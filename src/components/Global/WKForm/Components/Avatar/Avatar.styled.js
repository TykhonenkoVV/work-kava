import styled from '@emotion/styled';

export const AvatarWWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
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

export const ButtonChangeImg = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
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
