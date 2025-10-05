import { lang } from 'lang/lang';

export const validate = (data, locale) => {
  let result = {};
  const { username, email, phonenumber, picker, password, interval } = data;
  if (username !== undefined) {
    const res = /^[^-\s][A-Za-zА-ЯЄIЇа-яєiї' ]+/gm.test(username);
    if (username === '' || !res)
      result = {
        ...result,
        username: lang[locale].error_user_name
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
    if (picker === '')
      result = {
        ...result,
        picker: lang[locale].error_picker
      };
  }
  if (interval !== undefined) {
    if (interval === '')
      result = {
        ...result,
        interval: lang[locale].error_interval
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
  }

  // console.log('errors', result);

  return result;
};
