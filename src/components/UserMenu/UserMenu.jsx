import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/AuthOperations.ts';
import { useAuth } from '../../hooks';

import { TextButton } from '../TextButton/TextButton';

import { WrapperCss, WelcomeCss } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperCss>
      <WelcomeCss>Welcome, {user.name}</WelcomeCss>
      <TextButton
        type="button"
        text={'Logout'}
        onClick={() => dispatch(logOut())}
      />
    </WrapperCss>
  );
};
