import {
  CounterButton,
  CounterContent,
  CounterWrapper
} from './Counter.styled';

export const Counter = ({ quantity, max, onClick }) => {
  return (
    <CounterWrapper>
      <CounterButton
        disabled={quantity < 2}
        type="button"
        onClick={() => onClick('dec')}
      />
      <CounterContent>{quantity}</CounterContent>
      <CounterButton
        disabled={quantity > max}
        id="plus"
        type="button"
        onClick={() => onClick('inc')}
      />
    </CounterWrapper>
  );
};
