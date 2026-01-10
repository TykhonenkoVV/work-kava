import { useState } from 'react';
import {
  Option,
  Options,
  PickerBackdrop,
  PickerTitle,
  PickerWrapper,
  Select,
  Text
} from './WKSelect.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { Calendar } from '../Calendar/Calendar';
import { formatDate } from '../Calendar/helpers/formatDate';

export const WKSelect = ({
  jsOrder,
  name,
  placeholder,
  icon,
  icon_animated,
  options,
  type,
  locale,
  selectCallback,
  children
}) => {
  const [selectedDate, setSelectedDay] = useState(new Date());
  const [pickerValue, setPickerValue] = useState(false);
  const [selects, setSelects] = useState({});
  const [isSelected, setIsSelected] = useState({
    value: 0,
    text: placeholder
  });

  const handleHoursChanges = (e, name) => {
    const selectedValue = parseInt(e.target.dataset.value);
    setIsSelected({ value: selectedValue, text: e.target.textContent });
    selectCallback(selectedValue);
  };

  const onSelectOpen = e => {
    const eventName = e.target.getAttribute('name');
    setSelects({ [eventName]: true });
  };

  const onClosePicker = date => {
    setPickerValue(formatDate(date, 'DD.MM.YYYY', locale));
    setSelects({ picker: false });
  };

  return (
    <>
      <Select
        name={name}
        value={
          name === 'picker' ? pickerValue || isSelected.value : isSelected.value
        }
        jsOrder={jsOrder}
        onClick={onSelectOpen}
      >
        <input
          name={name}
          value={
            name === 'picker'
              ? pickerValue || isSelected.value
              : isSelected.value
          }
          hidden
          readOnly
          onChange={() => {}}
        />
        <SvgIcon w={24} h={24} icon={icon} className={'js-class'} />
        <Text>
          {name === 'picker' ? pickerValue || isSelected.text : isSelected.text}
        </Text>
        {icon_animated && (
          <SvgIcon
            className={selects[name] ? 'js-class rotate' : 'js-class'}
            w={24}
            h={24}
            icon={icon_animated.icon}
          />
        )}
        {name === 'hours_selector' && (
          <Options id="options" className={selects[name] ? '' : 'hidden'}>
            {options?.map((option, i) => (
              <Option
                key={i}
                data-value={i + 1}
                onClick={e => handleHoursChanges(e, name)}
                selected={i + 1 === isSelected.value}
                className={i + 1 === isSelected.value ? 'selected' : ''}
              >
                {option}
              </Option>
            ))}
          </Options>
        )}
        {type === 'date' && (
          <PickerBackdrop className={selects[name] ? null : 'hidden'}>
            <PickerWrapper>
              <PickerTitle>{placeholder}</PickerTitle>
              <Calendar
                locale={locale}
                selectDate={date => setSelectedDay(date)}
                selectedDate={selectedDate}
                firstWeekDayNumber={(locale === 'en-UK' && 1) || 2}
                onClose={onClosePicker}
              />
            </PickerWrapper>
          </PickerBackdrop>
        )}
      </Select>
      {children}
    </>
  );
};
