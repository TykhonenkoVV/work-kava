import { CalendarMain, CalendarWeekNames, Today } from './Calendar.styled';
import { useCalendar } from './hooks/useCalendar';
import { calendarSettings } from './styles/calendarSettings';
import { formatDate } from './helpers/formatDate';
import { CalendarHeader } from './components/CalendarHeader/CalendarHeader';
import { ButtonArrow } from './components/ButtonArrow/ButtonArrow';
import { ButtonMode } from './components/ButtonMode/ButtonMode';
import { CalendarBody } from './components/CalendarBody/CalendarBody';
import { CalendarItems } from './components/CalendarItems/CalendarItems';
import { CalendarItem } from './components/CalendarItem/CalendarItem';
import { lang } from 'lang/lang';

export const Calendar = ({
  locale = 'default',
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 1,
  settings,
  onClose,
  className
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber
  });

  const calendarTheme = settings
    ? {
        coef: settings.coef || calendarSettings.coef,
        borderRadius: settings.borderRadius || calendarSettings.borderRadius,
        theme: { ...calendarSettings.theme, ...settings.theme },
        transition: settings.transition || calendarSettings.transition
      }
    : calendarSettings;

  return (
    <CalendarMain className={className} calendarTheme={calendarTheme}>
      <CalendarHeader calendarTheme={calendarTheme}>
        <ButtonArrow
          onClick={functions.onClickArrow}
          calendarTheme={calendarTheme}
          direction="left"
        />
        <ButtonMode
          setMode={functions.setMode}
          state={state}
          calendarTheme={calendarTheme}
        />
        <ButtonArrow
          onClick={functions.onClickArrow}
          calendarTheme={calendarTheme}
          direction="right"
        />
      </CalendarHeader>
      <CalendarWeekNames calendarTheme={calendarTheme}>
        {state.weekDaysNames.map(weekDaysName => (
          <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
        ))}
      </CalendarWeekNames>
      <CalendarBody calendarTheme={calendarTheme}>
        <CalendarItems state={state.mode} calendarTheme={calendarTheme}>
          <CalendarItem
            selectDate={selectDate}
            state={state}
            calendarTheme={calendarTheme}
            onClick={functions}
            onClose={onClose}
          />
        </CalendarItems>
      </CalendarBody>
      <Today onClick={functions.setTodayDate} calendarTheme={calendarTheme}>
        {lang[locale].today}:{' '}
        {formatDate(new Date(), 'DDD DD MMM YYYY', locale)}
      </Today>
    </CalendarMain>
  );
};
