import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/AuthOperations';
import { useAuth } from 'hooks';

import { WrapperCss, ButtonCss, WelcomeCss } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperCss>
      <WelcomeCss>Welcome, {user.name}</WelcomeCss>
      <ButtonCss type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonCss>
    </WrapperCss>
  );
};
