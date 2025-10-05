import styled from '@emotion/styled';

export const StyledButtonMode = styled.div`
  cursor: pointer;
  transition: color ${props => props.calendarTheme.transition};
  &:hover {
    color: ${props => props.calendarTheme.theme.headerHoverColor};
  }
`;
