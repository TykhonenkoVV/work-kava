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
  const isRegistered = useSelector(selectIsRegistered);
  const isUpdated = useSelector(selectIsUpdated);
  const authError = useSelector(selectAuthErrors);

  return {
    isLoggedIn,
    isRefreshing,
    isUpdated,
    locale,
    user,
    authError,
    isRegistered
  };
};
