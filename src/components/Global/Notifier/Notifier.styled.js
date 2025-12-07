import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const show = keyframes`
    0% {
        transform: translateX(calc(100% + 15px));
    }
    10% {
        transform: translateX(0);
    }
    90% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(100% + 15px));
    }
`;

const progressBar = keyframes`
0% {
    width: calc(100% - 10px);
}
100% {
    width: 0;
}
`;

export const Item = styled.div`
  position: fixed;
  bottom: 100px;
  left: 10px;
  display: flex;
  gap: 10px;
  width: 300px;
  align-items: center;
  padding: 30px 10px 20px;
  border-radius: 5px;
  background-color: rgb(219, 75, 75);
  opacity: 0.9;
  transform: translateX(calc(100% + 15px));
  z-index: 5;
  &.animation-show {
    animation-name: ${show};
    animation-duration: 6000ms;
    animation-fill-mode: forwards;
  }
  &.animation-show #progress-bar {
    animation-play-state: running;
    animation-name: ${progressBar};
    animation-delay: 600ms;
    animation-duration: 5000ms;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }
  &:hover,
  &:hover #progress-bar {
    animation-play-state: paused;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const NotifierBox = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 50%;
  background-color: rgb(180, 41, 41);
`;

export const Notification = styled.p``;

export const Icon = styled.svg`
  width: 30px;
  height: 30px;
  fill: rgb(204, 158, 158);
`;

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: calc(100% - 10px);
  height: 5px;
  background-color: #000;
`;
