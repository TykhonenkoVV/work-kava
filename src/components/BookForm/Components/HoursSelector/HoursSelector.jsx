import { useState } from 'react';

import {
  DropdownContent,
  DropdownInput,
  DropdownItem,
  Text
} from './HoursSelector.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { lang } from 'lang/lang';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

export const HoursSelector = ({ onHoursChanges }) => {
  const { locale } = useSelector(selectUser);
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState({
    value: 1,
    text: lang[locale].select_interval
  });

  const handleHoursChanges = e => {
    const selectedValue = parseInt(e.target.dataset.value);
    setIsSelected({ value: selectedValue, text: e.target.textContent });
    setIsActive(!isActive);
    onHoursChanges(selectedValue);
  };

  return (
    <DropdownInput
      onClick={e => {
        setIsActive(!isActive);
      }}
    >
      <SvgIcon w={28} h={28} icon="clock" />
      <Text style={{ marginInlineEnd: 'auto' }}>{isSelected.text}</Text>
      <SvgIcon
        className={isActive ? 'rotate' : ''}
        w={28}
        h={28}
        icon="arrow"
      />
      <DropdownContent className={isActive ? '' : 'hidden'}>
        {Array.from({ length: 6 }).map((el, i) => (
          <DropdownItem
            key={i}
            data-value={i + 1}
            onClick={handleHoursChanges}
            selected={i + 1 === isSelected.value}
            className={i + 1 === isSelected.value ? 'selected' : ''}
          >
            {i === 0
              ? `1 ${lang[locale].hour}`
              : i < 5
              ? `${i + 1} ${lang[locale].hours}`
              : lang[locale].over_5_hours}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownInput>
  );
};
