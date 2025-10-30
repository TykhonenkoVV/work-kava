import { StyledButtonMode } from './ButtonMode.styled';

export const ButtonMode = ({ setMode, state, calendarTheme }) => {
  const {
    mode,
    monthesNames,
    selectedYear,
    selectedMonth,
    selectedYearsInterval
  } = state;

  const onButtonModeClick = param => {
    const prop = param === 'days' ? 'monthes' : 'years';
    if (param === 'days' || param === 'monthes') {
      return () => setMode(prop);
    } else return () => {};
  };

  return (
    <StyledButtonMode
      calendarTheme={calendarTheme}
      aria-hidden={mode === 'days' || mode === 'monthes' ? true : null}
      onClick={onButtonModeClick(mode)}
    >
      {mode === 'days' &&
        monthesNames[selectedMonth.monthIndex].month + ' ' + selectedYear}
      {mode === 'monthes' && selectedYear}
      {mode === 'years' &&
        selectedYearsInterval[0] +
          ' - ' +
          selectedYearsInterval[selectedYearsInterval.length - 1]}
    </StyledButtonMode>
  );
};
