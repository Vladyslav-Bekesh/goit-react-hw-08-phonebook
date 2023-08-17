import { NavLinkCss } from '../Navigation.styled';
export const AuthNav = () => {
  return (
    <div>
      <NavLinkCss to="/register">Register</NavLinkCss>
      <NavLinkCss to="/login">Log In</NavLinkCss>
    </div>
  );
};
