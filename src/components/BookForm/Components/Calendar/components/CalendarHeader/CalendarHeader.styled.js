import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${props => 40 * props.calendarTheme.coef + 'px'};
  font-size: ${props => 16 * props.calendarTheme.coef + 'px'};
  ${props =>
    props.calendarTheme.borderRadius &&
    `border-top-left-radius: ${
      props.calendarTheme.borderRadius * props.calendarTheme.coef
    }px;
  border-top-right-radius: ${
    props.calendarTheme.borderRadius * props.calendarTheme.coef
  }px;`};
  background-color: ${props => props.calendarTheme.theme.headerBgrColor};
  color: ${props => props.calendarTheme.theme.headerTextColor};
  padding-left: ${props => 10 * props.calendarTheme.coef + 'px'};
  padding-right: ${props => 10 * props.calendarTheme.coef + 'px'};
  box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.2);
`;
