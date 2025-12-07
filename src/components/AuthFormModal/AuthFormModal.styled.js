import styled from '@emotion/styled';
import { BlueButton } from 'styles/buttonStyles';

export const AuthContainer = styled.div`
  display: flex;
  gap: 28px;
  overflow: hidden;
`;

export const AuthFormCaption = styled.p`
  order: ${({ jsOrder }) => jsOrder};
  margin-block-start: 20px;
  margin-block-end: 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
`;

export const AuthChangeButton = styled(BlueButton)`
  order: ${({ jsOrder }) => jsOrder};
  height: 52px;
  font-size: 20px;
`;
