import styled from '@emotion/styled';

export const PickerBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10001;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
  padding: 5px;
  border: 1px solid gray;
  background-color: #fff000;
`;

export const PickItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid gray;
  &[disabled] {
    background-color: #7a7a7a;
  }
`;
