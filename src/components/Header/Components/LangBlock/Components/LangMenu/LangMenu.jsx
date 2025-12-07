import { LangBtn, LangMenuItem, LangMenuUl } from './LangMenu.styled';
import {
  LOCALE_UA,
  LOCALE_DE,
  LOCALE_EN,
  FLAG_DE_URL,
  FLAG_UA_URL,
  FLAG_UK_URL
} from 'utils/constants';
import { useAuth } from 'hooks/useAuth';

export const LangMenu = ({ isModalOpen, handleCklick, forwardedRef }) => {
  const { locale } = useAuth();

  return (
    <LangMenuUl
      id="langMenu"
      className={!isModalOpen ? 'visually-hidden' : null}
      ref={forwardedRef}
    >
      {locale !== LOCALE_EN && (
        <LangMenuItem>
          <LangBtn id={LOCALE_EN} type="button" onClick={handleCklick}>
            <img width={40} height={40} src={FLAG_UK_URL} alt="flag" />
            <span>Englisch</span>
          </LangBtn>
        </LangMenuItem>
      )}
      {locale !== LOCALE_DE && (
        <LangMenuItem>
          <LangBtn id={LOCALE_DE} type="button" onClick={handleCklick}>
            <img width={40} height={40} src={FLAG_DE_URL} alt="flag" />
            <span>Deutsch</span>
          </LangBtn>
        </LangMenuItem>
      )}
      {locale !== LOCALE_UA && (
        <LangMenuItem>
          <LangBtn id={LOCALE_UA} type="button" onClick={handleCklick}>
            <img width={40} height={40} src={FLAG_UA_URL} alt="flag" />
            <span>Українська</span>
          </LangBtn>
        </LangMenuItem>
      )}
    </LangMenuUl>
  );
};
