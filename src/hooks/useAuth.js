import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsRegistered,
  selectAuthErrors,
  selectIsUpdated,
  selectLocale
} from '../store/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const locale = useSelector(selectLocale);
  const user = useSelector(selectUser);
  const { avatarURL } = user;
  const isRegistered = useSelector(selectIsRegistered);
  const isUpdated = useSelector(selectIsUpdated);
  const authError = useSelector(selectAuthErrors);

  const shortLocale =
    locale === 'en-UK' ? 'en' : locale === 'de-DE' ? 'de' : 'ua';

  return {
    isLoggedIn,
    isRefreshing,
    isUpdated,
    locale,
    shortLocale,
    user,
    avatarURL,
    authError,
    isRegistered
  };
};
