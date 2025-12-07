import { useDispatch } from 'react-redux';
import { LangMenu } from './Components/LangMenu/LangMenu';
import { LangButton, LangMenuWrapper } from './LangBlock.styled';
import {
  FLAG_DE_URL,
  FLAG_UA_URL,
  FLAG_UK_URL,
  LOCALE_DE,
  LOCALE_UA
} from 'utils/constants';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { lang } from 'lang/lang';
import { useModal } from 'hooks/useModal';
import { useEffect, useRef } from 'react';
import { changeLocale, turnOffIsUpdated } from 'store/auth/slice';
import { useClickOutsideModal } from 'hooks/useClickOutsideModal';
import { updateUser } from 'store/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const LangBlock = () => {
  const { locale, isLoggedIn, isUpdated } = useAuth();
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();
  const { isModalOpen, toggleModal, closeModal } = useModal();
  const langMenuRef = useRef(null);
  const langButtonRef = useRef(null);

  useClickOutsideModal([langMenuRef, langButtonRef], closeModal, 'langMenu');

  useEffect(() => {
    if (isUpdated) {
      dispatch(turnOffIsUpdated());
    }
  }, [dispatch, isUpdated]);

  const handleLangClick = e => {
    closeModal('langMenu');
    if (isLoggedIn) dispatch(updateUser({ locale: e.target.id }));
    else dispatch(changeLocale(e.target.id));
  };

  return (
    <LangMenuWrapper>
      <LangMenu
        isModalOpen={isModalOpen.langMenu}
        handleCklick={handleLangClick}
        forwardedRef={langMenuRef}
      />
      <LangButton
        type="button"
        aria-label="language"
        onClick={() => toggleModal('langMenu')}
        ref={langButtonRef}
      >
        <img
          width={40}
          height={40}
          src={
            locale === LOCALE_UA
              ? FLAG_UA_URL
              : locale === LOCALE_DE
              ? FLAG_DE_URL
              : FLAG_UK_URL
          }
          alt="flag"
        />
        {windowWidth < 1024 && lang[locale].language}
      </LangButton>
    </LangMenuWrapper>
  );
};
