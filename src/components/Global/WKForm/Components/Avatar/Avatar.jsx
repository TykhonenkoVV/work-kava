import { useState } from 'react';
import {
  AvatarImg,
  AvatarWWrapper,
  ButtonChangeImg,
  ImgWrapper
} from './Avatar.styled';
import { useAuth } from 'hooks/useAuth';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { CLOUD_NAME } from 'utils/constants';
import profileAvatar from '../../../../../images/profile.svg';

export const Avatar = () => {
  const { user } = useAuth();
  const { avatarURL } = user;
  const [previewAvatar, setPreviewAvatar] = useState(
    avatarURL ? `${CLOUD_NAME}f_auto,q_auto,w_200/${avatarURL}` : profileAvatar
  );

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AvatarWWrapper>
      <ImgWrapper>
        <AvatarImg
          width={200}
          height={200}
          src={previewAvatar}
          alt="userlogo"
        />
        <input
          name="avatar"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          hidden
          id="avatarInput"
        />
      </ImgWrapper>
      <ButtonChangeImg
        type="button"
        onClick={() => document.getElementById('avatarInput').click()}
      >
        <SvgIcon w={28} h={28} icon="add" />
      </ButtonChangeImg>
    </AvatarWWrapper>
  );
};
