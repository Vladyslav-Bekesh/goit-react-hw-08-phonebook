import { useAuth } from 'hooks';
import { NavLinkCss } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkCss to="/">
        Home
      </NavLinkCss>
      {isLoggedIn && (
        <NavLinkCss to="/phonebook">
          Phonebook
        </NavLinkCss>
      )}
    </nav>
  );
};
