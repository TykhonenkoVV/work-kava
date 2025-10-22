import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsRegistered,
  selectAuthErrors
} from '../store/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isRegistered = useSelector(selectIsRegistered);
  const authError = useSelector(selectAuthErrors);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    authError,
    isRegistered
  };
};
