import styled from '@emotion/styled';

export const StyledCalendarItems = styled.div`
  flex-grow: 1;
  display: grid;
  /* align-items: center; */
  text-align: center;
  gap: 1px 1px;
  grid-template-columns: ${props =>
    props.mode === 'days' ? 'repeat(7, 1fr)' : 'repeat(3, 1fr)'};
  grid-template-rows: ${props =>
    props.mode === 'days' ? 'repeat(6, 1fr)' : 'repeat(4, 1fr)'};
  font-size: ${props =>
    (props.mode === 'days' ? 10 : 12) * props.calendarTheme.coef + 'px'};
  color: ${props => props.calendarTheme.theme.daysTextColor};
  font-weight: 400;
`;
