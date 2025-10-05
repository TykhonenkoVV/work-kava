import styled from '@emotion/styled';

export const StyledCalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props =>
    214 * props.calendarTheme.coef - 64 * props.calendarTheme.coef + 'px'};
  padding: ${props => 5 * props.calendarTheme.coef + 'px'};
  ${props =>
    props.calendarTheme.borderRadius &&
    `border-bottom-left-radius: ${
      props.calendarTheme.borderRadius * props.calendarTheme.coef
    }px;
  border-bottom-right-radius: ${
    props.calendarTheme.borderRadius * props.calendarTheme.coef
  }px;`};
`;
