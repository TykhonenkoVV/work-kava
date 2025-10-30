import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import {
  TextStyled,
  DivItem,
  DivUserImgStyled,
  DivIconPlus,
  AvatarImg
} from './Profile.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { useAuth } from 'hooks/useAuth';
import { lang } from 'lang/lang';
import { FormProfile } from './components/FormProfile/FormProfile';

export const Profile = ({ action }) => {
  const { avatarURL } = useSelector(selectUser);
  const [avatarFile, setAvatarFile] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const { user } = useAuth();
  const { locale } = user;

  const resetAvatar = () => {
    setAvatarFile(null);
    setPreviewAvatar(null);
  };

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = formData => {
    console.log('Submit', formData);
    action();
  };

  return (
    <>
      <TextStyled>{lang[locale].edit_profile}</TextStyled>
      <DivItem>
        <DivUserImgStyled>
          {previewAvatar ? (
            <AvatarImg
              width={200}
              height={200}
              src={previewAvatar}
              alt="userlogo"
            />
          ) : avatarURL ? (
            <AvatarImg
              width={200}
              height={200}
              src={avatarURL}
              alt="userlogo"
            />
          ) : (
            <SvgIcon w={200} h={200} icon="profile" />
          )}
          <input
            width={200}
            height={200}
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            hidden
            id="avatarInput"
          />
        </DivUserImgStyled>
        <DivIconPlus
          onClick={() => document.getElementById('avatarInput').click()}
        >
          <SvgIcon w={28} h={28} icon="add" />
        </DivIconPlus>
      </DivItem>
      <FormProfile
        avatarFile={avatarFile}
        onAvatarChange={resetAvatar}
        onSubmit={handleSubmit}
      />
    </>
  );
};
