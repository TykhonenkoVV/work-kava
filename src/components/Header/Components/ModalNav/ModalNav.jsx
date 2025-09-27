import { BackdropHeader, CloseButton, UserBtn } from './ModalNav.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { Navigation } from '../Navigation/Navigation';
import { LangBlock } from '../LangBlock/LangBlock';
import { lang } from 'lang/lang';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

export const ModalNav = ({
  action,
  isModalOpen,
  handleLangClick,
  toggleModal
}) => {
  const { local } = useSelector(selectUser);
  return (
    <BackdropHeader>
      <CloseButton type="button" onClick={action} aria-label="close">
        <SvgIcon w={36} h={36} icon="close" />
      </CloseButton>
      <UserBtn type="button">
        <SvgIcon w={40} h={40} icon={'avatar'} aria-label="icon user" />
        {lang[local].sign_in}
      </UserBtn>
      <Navigation action={action} />
      <LangBlock
        isModalOpen={isModalOpen}
        handleLangClick={handleLangClick}
        toggleModal={toggleModal}
      />
    </BackdropHeader>
  );
};
