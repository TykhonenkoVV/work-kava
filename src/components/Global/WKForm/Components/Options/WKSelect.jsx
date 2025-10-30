import { useState } from 'react';
import { Option, Options, Select, Text } from './WKSelect.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';

export const WKSelect = ({
  jsOrder,
  name,
  placeholder,
  icon,
  icon_animated,
  options,
  onOptionsChanges,
  pickerValue
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState({
    value: 1,
    text: placeholder
  });

  const handleHoursChanges = e => {
    const eventName = e.currentTarget.getAttribute('name');
    const selectedValue = parseInt(e.target.dataset.value);
    setIsSelected({ value: selectedValue, text: e.target.textContent });
    setIsActive({ [eventName]: !isActive[eventName] });
  };

  const onSelectOpen = e => {
    const eventName = e.currentTarget.getAttribute('name');
    const isUnactive = e.currentTarget.classList.contains('hidden');
    if (isUnactive) {
      onOptionsChanges({ [eventName]: false });
    } else {
      onOptionsChanges({ [eventName]: true });
    }

    setIsActive({ ...isActive, [eventName]: !isActive[eventName] });
  };

  return (
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
          name === 'picker' ? pickerValue || isSelected.value : isSelected.value
        }
        hidden
        readOnly
        onChange={() => {}}
      />
      <SvgIcon w={28} h={28} icon={icon} />
      <Text style={{ marginInlineEnd: 'auto' }}>
        {name === 'picker' ? pickerValue || isSelected.text : isSelected.text}
      </Text>
      {icon_animated && (
        <SvgIcon
          className={isActive[name] ? 'rotate' : ''}
          w={28}
          h={28}
          icon={icon_animated.icon}
        />
      )}
      {name === 'hours_selector' && (
        <Options className={isActive[name] ? '' : 'hidden'}>
          {options?.map((el, i) => (
            <Option
              key={i}
              data-value={i + 1}
              onClick={handleHoursChanges}
              selected={i + 1 === isSelected.value}
              className={i + 1 === isSelected.value ? 'selected' : ''}
            >
              {el}
            </Option>
          ))}
        </Options>
      )}
    </Select>
  );
};
