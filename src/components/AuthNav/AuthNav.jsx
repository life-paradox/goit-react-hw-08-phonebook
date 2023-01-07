import { StyledLink } from 'components/StyledComponents/SC';

const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};

export default AuthNav;
