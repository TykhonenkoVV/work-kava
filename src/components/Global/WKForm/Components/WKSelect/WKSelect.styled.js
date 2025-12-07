import styled from '@emotion/styled';

export const Select = styled.div`
  order: ${({ jsOrder }) => jsOrder};
  ${({ name }) => name !== 'picker' && 'position: relative; z-index: 3'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 20px;
  line-height: 1;
  color: ${props => props.theme.colors.darkGray};
  padding-inline-start: 8px;
  padding-inline-end: 8px;
  border: 1.5px solid ${props => props.theme.colors.primary};
  fill: ${props => props.theme.colors.darkGray};
  outline: none;

  cursor: pointer;

  transition: border-color ${props => props.theme.baseTransition},
    color ${props => props.theme.baseTransition},
    fill ${props => props.theme.baseTransition};

  & .js-class {
    pointer-events: none;
    transition: rotate ${props => props.theme.baseTransition};
  }
  & .js-class.rotate {
    rotate: 180deg;
  }

  &:hover,
  :focus,
  :active {
    border-color: ${props => props.theme.colors.accent};
    /* color: ${props => props.theme.colors.accent}; */
    fill: ${props => props.theme.colors.accent};
  }
  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  pointer-events: none;
  margin-inline-start: 16px;
  margin-inline-end: auto;
`;

export const Options = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1.5px solid ${props => props.theme.colors.primary};

  &.hidden {
    display: none;
  }
`;

export const Option = styled.li`
  z-index: 3;
  padding-block-start: 8px;
  padding-block-end: 8px;
  padding-inline-start: 60px;
  padding-inline-end: 16px;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: color ${props => props.theme.baseTransition},
    background-color ${props => props.theme.baseTransition};

  &:hover,
  :focus,
  :active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
  }

  &.selected {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const PickerBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 4;
  pointer-events: auto;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.baseTransition};
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

export const PickerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PickerTitle = styled.p`
  margin-block-end: 16px;
  text-align: center;
`;

export const DropdownButton = styled.span`
  position: absolute;
  right: 16px;
  top: 20px;
  fill: ${props => props.theme.colors.primary};
  transition: fill ${props => props.theme.baseTransition};
  cursor: pointer;

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
`;
