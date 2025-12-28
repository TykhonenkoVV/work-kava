import {
  InfoModalCaption,
  InfoModalTitle,
  StyledLink
} from './InfoModal.styled';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { BlueButton } from 'styles/buttonStyles';

export const InfoModal = ({ type, data, onClose, text }) => {
  return (
    <>
      {type === 'rejected' && (
        <SvgIcon
          w={40}
          h={40}
          icon={'error'}
          addedStyle={{ fill: '#ff0000', marginBlockEnd: '16px' }}
        />
      )}
      {type === 'fulfilled' && (
        <SvgIcon
          w={40}
          h={40}
          icon={'success'}
          addedStyle={{ fill: '#00a500', marginBlockEnd: '16px' }}
        />
      )}
      {type === 'warning' && (
        <SvgIcon
          w={40}
          h={40}
          icon={'warning'}
          addedStyle={{ fill: '#fcbd10', marginBlockEnd: '16px' }}
        />
      )}
      <InfoModalTitle>Info</InfoModalTitle>
      <InfoModalCaption>{text}</InfoModalCaption>
      {data && <StyledLink to={data}>Ok</StyledLink>}
      {!data && (
        <BlueButton type="button" onClick={onClose}>
          Ok
        </BlueButton>
      )}
    </>
  );
};
