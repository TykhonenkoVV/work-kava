import styled from '@emotion/styled';

export const PriceText = styled.p`
  order: ${({ jsOrder }) => jsOrder};
  margin-block-end: 20px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3334;
  text-align: center;
  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 28px;
  }
`;
