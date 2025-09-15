import { usePicker } from 'hooks/usePicker';
import { PickerBody, PickItem } from './Picker.styled';

export const Picker = () => {
  const { state, functions } = usePicker({
    locale: 'de-DE',
    firstWeekDayNumber: 2
  });

  const arr = () =>
    [...Array(21)].map((_, i) => {
      return state.calendarDays[i];
    });

  const today = new Date().getTime();

  return (
    <PickerBody>
      {arr().map((item, i) => (
        <PickItem key={item.timestamp} disabled={item.timestamp < today}>
          <p>{item.dayNumber}</p>
          <p>{item.monthShort}</p>
          <p>{item.year}</p>
        </PickItem>
      ))}
    </PickerBody>
  );
};
