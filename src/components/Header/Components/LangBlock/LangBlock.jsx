import { useDispatch, useSelector } from 'react-redux';
import { LangMenu } from './Components/LangMenu/LangMenu';
import { LangButton, LangMenuWrapper } from './LangBlock.styled';
import { selectUser } from 'store/auth/selectors';
import {
  FLAG_DE_URL,
  FLAG_UA_URL,
  FLAG_UK_URL,
  LOCALE_DE,
  LOCALE_UA
} from 'utils/GlobalUtils';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { lang } from 'lang/lang';
import { useModal } from 'hooks/useModal';
import { useEffect, useRef, useState } from 'react';
import { changeLocale } from 'store/auth/slice';
import { useClickOutsideModal } from 'hooks/useClickOutsideModal';

export const LangBlock = () => {
  const { locale } = useSelector(selectUser);
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();
  const [newLocale, setNewLocale] = useState(false);
  const { isModalOpen, toggleModal, closeModal } = useModal();
  const langMenuRef = useRef(null);
  const langButtonRef = useRef(null);

  useClickOutsideModal([langMenuRef, langButtonRef], closeModal, 'langMenu');

  useEffect(() => {
    if (newLocale) dispatch(changeLocale(newLocale));
  }, [dispatch, newLocale]);

  const handleLangClick = e => {
    closeModal('langMenu');
    setNewLocale(e.target.id);
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
