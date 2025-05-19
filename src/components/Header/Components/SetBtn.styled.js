import styled from '@emotion/styled';

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  fill: #fff;
  ${props => props.styles};
`;
