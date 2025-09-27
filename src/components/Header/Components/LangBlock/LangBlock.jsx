import { useSelector } from 'react-redux';
import { LangMenu } from './Components/LangMenu/LangMenu';
import { LangButton, LangMenuWrapper } from './LangBlock.styled';
import { selectUser } from 'store/auth/selectors';
import {
  FLAG_DE_URL,
  FLAG_UA_URL,
  FLAG_UK_URL,
  LOCAL_DE,
  LOCAL_UA
} from 'utils/GlobalUtils';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { lang } from 'lang/lang';

export const LangBlock = ({ isModalOpen, handleLangClick, toggleModal }) => {
  const { local } = useSelector(selectUser);
  const windowWidth = useWindowWidth();
  return (
    <LangMenuWrapper>
      <LangMenu isModalOpen={isModalOpen} handleCklick={handleLangClick} />
      <LangButton type="button" aria-label="language" onClick={toggleModal}>
        <img
          width={40}
          height={40}
          src={
            local === LOCAL_UA
              ? FLAG_UA_URL
              : local === LOCAL_DE
              ? FLAG_DE_URL
              : FLAG_UK_URL
          }
          alt="flag"
        />
        {windowWidth < 1024 && lang[local].language}
      </LangButton>
    </LangMenuWrapper>
  );
};
