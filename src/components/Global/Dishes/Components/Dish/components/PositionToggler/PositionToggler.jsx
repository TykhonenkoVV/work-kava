import { PositionTogglerWrapper } from './PositionToggler.styled';

export const PositionToggler = ({ title, defaultPosition, onClick }) => {
  return (
    <PositionTogglerWrapper
      onClick={() => onClick(defaultPosition === 1 ? 2 : 1)}
    >
      {defaultPosition === 1 ? 'Standart' : 'XL'}
    </PositionTogglerWrapper>
  );
};
