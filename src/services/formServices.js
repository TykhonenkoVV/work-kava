import { lang } from 'lang/lang';

export const validate = (data, locale) => {
  let result = {};
  const {
    name,
    email,
    phonenumber,
    picker,
    password,
    confirm_password,
    new_password,
    hours_selector
  } = data;
  if (name !== undefined) {
    const res = /^[^-\s][A-Za-zА-ЯЄIЇа-яєiї' ]+/gm.test(name);
    if (name === '' || !res)
      result = {
        ...result,
        name: lang[locale].error_user_name
      };
  }
  if (email !== undefined) {
    const res = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(
      email
    );
    if (email === '' || !res)
      result = {
        ...result,
        email: lang[locale].error_email
      };
  }
  if (phonenumber !== undefined) {
    if (phonenumber === '')
      result = {
        ...result,
        phonenumber: lang[locale].error_phonenumber
      };
  }
  if (picker !== undefined) {
    if (picker === '0')
      result = {
        ...result,
        picker: lang[locale].error_picker
      };
  }
  if (hours_selector !== undefined) {
    if (hours_selector === '0')
      result = {
        ...result,
        hours_selector: lang[locale].error_interval
      };
  }
  if (password !== undefined) {
    const res =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      );
    if (password === '' || !res)
      result = {
        ...result,
        password: lang[locale].error_pass
      };
    if (confirm_password !== undefined) {
      if (confirm_password !== password)
        result = {
          ...result,
          confirm_password: lang[locale].error_confirm_pass
        };
    }
  }
  if (new_password !== undefined) {
    const res =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        new_password
      );
    if (new_password === '' || !res)
      result = {
        ...result,
        new_password: lang[locale].error_pass
      };
  }

  return result;
};

export const orderForm = (formData, defaultValues) => {
  let res = false;
  if (formData.avatar.size !== 0) res = { avatar: formData.avatar };
  if (formData.name !== defaultValues.name)
    res = { ...res, name: formData.name };
  if (formData.email !== defaultValues.email)
    res = { ...res, email: formData.email };
  if (formData.new_password)
    res = {
      ...res,
      password: formData.password,
      newPassword: formData.new_password
    };
  return res;
};

export const getFormElements = (locale, formType) => {
  const inputs = {
    file: {
      component: 'input',
      type: 'file',
      name: 'avatar',
      accept: 'image/*'
    },
    name: {
      component: 'input',
      name: 'name',
      type: 'text',
      placeholder: lang[locale].enter_name,
      read_only: null,
      icon: 'user'
    },
    email: {
      component: 'input',
      name: 'email',
      type: 'text',
      placeholder: lang[locale].enter_email,
      read_only: null,
      icon: 'at'
    },
    phonenumber: {
      component: 'input',
      name: 'phonenumber',
      type: 'text',
      placeholder: '+38 (___)___-__-__',
      read_only: null,
      icon: 'phone'
    },
    password: {
      component: 'input',
      name: 'password',
      type: 'password',
      placeholder: lang[locale].enter_pass,
      read_only: null,
      icon: 'pass',
      icon_animated: {
        action: 'change',
        iconDenied: 'eye-denied',
        iconAllow: 'eye-allow'
      }
    },
    picker: {
      component: 'select',
      name: 'picker',
      type: 'date',
      placeholder: lang[locale].select_date,
      read_only: true,
      icon: 'calendar'
    },
    hours_selector: {
      component: 'select',
      name: 'hours_selector',
      type: 'select',
      options: [
        `1 ${lang[locale].hour}`,
        `2 ${lang[locale].hours}`,
        `3 ${lang[locale].hours}`,
        `4 ${lang[locale].hours}`,
        `5 ${lang[locale].hours_2}`,
        lang[locale].over_5_hours
      ],
      placeholder: lang[locale].select_interval,
      read_only: true,
      icon: 'clock',
      icon_animated: {
        action: 'rotate',
        icon: 'arrow'
      }
    },
    change_pass: {
      component: 'input',
      name: 'change_pass',
      type: 'checkbox',
      checked: false,
      caption: lang[locale].change_pass
    }
    // remember_me: {
    //   component: 'input',
    //   name: 'remember_me',
    //   type: 'checkbox',
    //   checked: false,
    //   caption: lang[locale].remember_me
    // }
  };

  switch (formType) {
    case 'edit-profile':
      return [
        { ...inputs.file, jsOrder: 0 },
        { ...inputs.name, jsOrder: 1 },
        { ...inputs.email, jsOrder: 2 },
        { ...inputs.change_pass, jsOrder: 3 },
        {
          ...inputs.password,
          placeholder: 'Old password',
          jsOrder: 4,
          dependent: true
        },
        {
          ...inputs.password,
          name: 'new_password',
          placeholder: 'New password',
          jsOrder: 5,
          dependent: true
        }
      ];

    case 'sign-in':
      return [
        { ...inputs.email, jsOrder: 0 },
        { ...inputs.password, jsOrder: 1 }
        // { ...inputs.remember_me, jsOrder: 2 }
      ];

    case 'sign-up':
      return [
        { ...inputs.name, jsOrder: 0 },
        { ...inputs.email, jsOrder: 1 },
        { ...inputs.password, jsOrder: 2 },
        {
          ...inputs.password,
          name: 'confirm_password',
          placeholder: lang[locale].confirm_pass,
          jsOrder: 3
        }
      ];

    case 'workplace':
      return [
        { ...inputs.name, jsOrder: 0 },
        { ...inputs.phonenumber, jsOrder: 1 },
        { ...inputs.picker, jsOrder: 2 },
        { ...inputs.hours_selector, jsOrder: 3 }
      ];

    case 'meeting-room':
      return [
        { ...inputs.name, jsOrder: 0 },
        { ...inputs.phonenumber, jsOrder: 1 },
        { ...inputs.picker, jsOrder: 2 },
        { ...inputs.hours_selector, jsOrder: 3 }
      ];

    case 'workshop':
      return [
        { ...inputs.name, jsOrder: 0 },
        { ...inputs.phonenumber, jsOrder: 1 },
        { ...inputs.picker, jsOrder: 2 },
        { ...inputs.hours_selector, jsOrder: 3 }
      ];

    default:
      return alert('Щось пішло не так(((');
  }
};

export const getFormText = (locale, formType) => {
  switch (formType) {
    case 'edit-profile':
      return {
        title: lang[locale].edit_profile,
        button_text: lang[locale].save_changes
      };

    case 'sign-in':
      return {
        title: lang[locale].login_to_profile,
        button_text: lang[locale].continue,
        caption: lang[locale].dont_have_an_account,
        change: lang[locale].select_sign_up
      };

    case 'sign-up':
      return {
        title: lang[locale].register,
        button_text: lang[locale].continue,
        caption: lang[locale].already_registered,
        change: lang[locale].select_sign_in
      };

    case 'workplace':
      return {
        title: lang[locale].book_now_place,
        button_text: lang[locale].book_now
      };

    case 'meeting-room':
      return {
        title: lang[locale].book_now_meeting_room,
        button_text: lang[locale].book_now
      };

    case 'workshop':
      return {
        title: lang[locale].book_now_workshop,
        button_text: lang[locale].book_now
      };

    default:
      return alert('Щось пішло не так(((');
  }
};
