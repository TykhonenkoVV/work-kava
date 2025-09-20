import { CLOUD_NAME } from 'utils/GlobalUtils';
import {
  BackdropHeader,
  CloseButton,
  LangBtn,
  UserBtn
} from './ModalNav.styled';
import { Navigation } from './Navigation';
import { useEffect } from 'react';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';

export const ModalNav = ({ action }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <BackdropHeader>
      <CloseButton type="button" onClick={action} aria-label="close">
        <SvgIcon w={36} h={36} icon="close" />
      </CloseButton>
      <UserBtn type="button">
        <SvgIcon w={40} h={40} icon={'avatar'} aria-label="icon user" />
        Sign Up
      </UserBtn>
      <Navigation action={action} />
      <LangBtn type="button">
        <img
          width={40}
          height={40}
          src={`${CLOUD_NAME}/flags/flag-uk.jpg`}
          alt="flag"
        />
        English
      </LangBtn>
    </BackdropHeader>
  );
};
