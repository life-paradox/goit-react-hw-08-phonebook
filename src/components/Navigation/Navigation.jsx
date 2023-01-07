import { StyledLink } from 'components/StyledComponents/SC';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">PhoneBook</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};

export default Navigation;
