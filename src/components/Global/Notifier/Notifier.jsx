import { useEffect, useRef, useState } from 'react';
import {
  CloseButton,
  Icon,
  Item,
  Notification,
  NotifierBox,
  ProgressBar
} from './Notifier.styled';
import { useSelector } from 'react-redux';
import { selectAuthErrors } from 'store/auth/selectors';

export const Notifier = () => {
  const error = useSelector(selectAuthErrors);
  const notifierRef = useRef(null);
  const progressBarRef = useRef(null);
  const [newClass, setNewClass] = useState(null);
  const [message, setMessage] = useState(null);

  const resetMessage = () => {
    setNewClass(null);
    setMessage(null);
  };

  useEffect(() => {
    if (error) {
      if (error?.status !== 404 && error?.message !== 'Unable to fetch user') {
        console.log('Not 404');

        setNewClass('animation-show');
        setMessage(error?.message);
      } else {
        console.log('404');
      }
    }
  }, [error]);

  useEffect(() => {
    const handleAnimationEnd = e => {
      console.log('Анимация закончилась!');
      if (e.target.id !== 'progress-bar') {
        setNewClass(null);
        setMessage(null);
      }
    };
    if (notifierRef?.current) {
      notifierRef.current.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (notifierRef?.current) {
        notifierRef.current.removeEventListener(
          'animationend',
          handleAnimationEnd
        );
      }
    };
  }, []);

  return (
    <Item ref={notifierRef} className={newClass}>
      <CloseButton type="button" onClick={resetMessage}>
        <svg width="20" height="20" fill="#fff" viewBox="0 0 32 32">
          <path d="M23.057 7.057l-16 16c-0.241 0.241-0.39 0.575-0.39 0.943s0.149 0.701 0.39 0.943v0c0.241 0.241 0.575 0.39 0.943 0.39s0.701-0.149 0.943-0.39l16-16c0.241-0.241 0.39-0.575 0.39-0.943s-0.149-0.701-0.39-0.943v0c-0.241-0.241-0.575-0.39-0.943-0.39s-0.701 0.149-0.943 0.39v0z"></path>
          <path d="M8 6.667c-0.368 0-0.701 0.149-0.943 0.391v0c-0.241 0.241-0.39 0.575-0.39 0.943s0.149 0.701 0.39 0.943l16 16c0.241 0.241 0.575 0.39 0.943 0.39s0.701-0.149 0.943-0.39v0c0.241-0.241 0.39-0.575 0.39-0.943s-0.149-0.701-0.39-0.943l-16-16c-0.241-0.241-0.575-0.391-0.943-0.391v0z"></path>
        </svg>
      </CloseButton>
      <NotifierBox>
        <Icon viewBox="0 0 32 32">
          <path d="M23.057 7.057l-16 16c-0.241 0.241-0.39 0.575-0.39 0.943s0.149 0.701 0.39 0.943v0c0.241 0.241 0.575 0.39 0.943 0.39s0.701-0.149 0.943-0.39l16-16c0.241-0.241 0.39-0.575 0.39-0.943s-0.149-0.701-0.39-0.943v0c-0.241-0.241-0.575-0.39-0.943-0.39s-0.701 0.149-0.943 0.39v0z"></path>
          <path d="M8 6.667c-0.368 0-0.701 0.149-0.943 0.391v0c-0.241 0.241-0.39 0.575-0.39 0.943s0.149 0.701 0.39 0.943l16 16c0.241 0.241 0.575 0.39 0.943 0.39s0.701-0.149 0.943-0.39v0c0.241-0.241 0.39-0.575 0.39-0.943s-0.149-0.701-0.39-0.943l-16-16c-0.241-0.241-0.575-0.391-0.943-0.391v0z"></path>
        </Icon>
      </NotifierBox>
      <Notification>{message}</Notification>
      <ProgressBar
        ref={progressBarRef}
        id="progress-bar"
        className={newClass}
      ></ProgressBar>
    </Item>
  );
};
