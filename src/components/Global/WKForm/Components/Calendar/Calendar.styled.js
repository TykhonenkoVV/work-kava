import styled from '@emotion/styled';

export const CalendarMain = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: ${props => 200 * props.calendarTheme.coef + 'px'};
  ${props =>
    props.calendarTheme.borderRadius &&
    `border-radius: ${
      props.calendarTheme.borderRadius * props.calendarTheme.coef
    }px`};
  text-transform: capitalize;
  background-color: ${props => props.calendarTheme.theme.mainBgrColor};
  border: ${props => props.calendarTheme.theme.mainBorder || 'unset'};
`;

export const CalendarWeekNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  gap: 1px 1px;
  height: ${props => 24 * props.calendarTheme.coef + 'px'};
  padding-left: ${props => 5 * props.calendarTheme.coef + 'px'};
  padding-right: ${props => 5 * props.calendarTheme.coef + 'px'};
  font-weight: 600;
  font-size: ${props => 8 * props.calendarTheme.coef + 'px'};
  color: ${props => props.calendarTheme.theme.weeksTextColor};
  background-color: ${props => props.calendarTheme.theme.weeksBgrColor};
  text-align: center;
`;

export const Today = styled.div`
  padding: ${props => 5 * props.calendarTheme.coef + 'px'};
  ${props =>
    props.calendarTheme.borderRadius &&
    `border-bottom-left-radius: ${
      props.calendarTheme.borderRadius * props.calendarTheme.coef
    }px;
  border-bottom-right-radius: ${
    props.calendarTheme.borderRadius * props.calendarTheme.coef
  }px;`};
  text-align: right;
  font-size: ${props => 10 * props.calendarTheme.coef + 'px'};
  cursor: pointer;
  background-color: ${props => props.calendarTheme.theme.restBgrColor};
`;
