import {
  CounterButton,
  CounterContent,
  CounterWrapper
} from './Counter.styled';

export const Counter = ({ quantity, onClick }) => {
  return (
    <CounterWrapper>
      <CounterButton
        disabled={quantity < 2}
        type="button"
        onClick={() => onClick('dec')}
      />
      <CounterContent>{quantity}</CounterContent>
      <CounterButton
        disabled={quantity > 9}
        id="plus"
        type="button"
        onClick={() => onClick('inc')}
      />
    </CounterWrapper>
  );
};
