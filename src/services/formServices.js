import { lang } from 'lang/lang';

export const getFormElements = (locale, formType) => {
  const inputs = {
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
      caption: lang[locale].change_pass
    },
    component: 'input',
    remember_me: {
      name: 'remember_me',
      type: 'checkbox',
      caption: lang[locale].remember_me
    }
  };

  switch (formType) {
    case 'edit_profile':
      return [
        { ...inputs.name, jsOrder: 0 },
        { ...inputs.email, jsOrder: 1 },
        { ...inputs.change_pass, jsOrder: 2 },
        { ...inputs.password, jsOrder: 3 }
      ];

    case 'sign_in':
      return [
        { ...inputs.email, jsOrder: 0 },
        { ...inputs.password, jsOrder: 1 },
        { ...inputs.remember_me, jsOrder: 2 }
      ];

    case 'sign_up':
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

    case 'book_workplace':
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
  console.log(formType);

  switch (formType) {
    case 'edit_profile':
      return {
        title: lang[locale].edit_profile,
        button_text: lang[locale].save_changes
      };
    case 'sign_in':
      return {
        title: lang[locale].login_to_profile,
        button_text: lang[locale].continue
      };
    case 'sign_up':
      return {
        title: lang[locale].register,
        button_text: lang[locale].continue
      };
    case 'book_workplace':
      return {
        title: lang[locale].book_now_place,
        button_text: lang[locale].book_now
      };
    default:
      return alert('Щось пішло не так(((');
  }
};
