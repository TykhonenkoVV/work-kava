import { useSelector } from 'react-redux';
import { LangBtn, LangMenuItem, LangMenuUl } from './LangMenu.styled';
import {
  LOCAL_UA,
  LOCAL_DE,
  LOCAL_EN,
  FLAG_DE_URL,
  FLAG_UA_URL,
  FLAG_UK_URL
} from 'utils/GlobalUtils';
import { selectUser } from 'store/auth/selectors';

export const LangMenu = ({ isModalOpen, handleCklick, forwardedRef }) => {
  const { local } = useSelector(selectUser);

  return (
    <LangMenuUl
      id="langMenu"
      className={!isModalOpen ? 'visually-hidden' : null}
      ref={forwardedRef}
    >
      {local !== LOCAL_EN && (
        <LangMenuItem>
          <LangBtn id={LOCAL_EN} type="button" onClick={handleCklick}>
            <img width={40} height={40} src={FLAG_UK_URL} alt="flag" />
            <span>Englisch</span>
          </LangBtn>
        </LangMenuItem>
      )}
      {local !== LOCAL_DE && (
        <LangMenuItem>
          <LangBtn id={LOCAL_DE} type="button" onClick={handleCklick}>
            <img width={40} height={40} src={FLAG_DE_URL} alt="flag" />
            <span>Deutsch</span>
          </LangBtn>
        </LangMenuItem>
      )}
      {local !== LOCAL_UA && (
        <LangMenuItem>
          <LangBtn id={LOCAL_UA} type="button" onClick={handleCklick}>
            <img width={40} height={40} src={FLAG_UA_URL} alt="flag" />
            <span>Українська</span>
          </LangBtn>
        </LangMenuItem>
      )}
    </LangMenuUl>
  );
};
