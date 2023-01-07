import { Container, StyledMain } from 'components/StyledComponents/SC';

const { default: LoginForm } = require('components/LoginForm/LoginForm');

const Login = () => {
  return (
    <StyledMain>
      <Container>
        <LoginForm />
      </Container>
    </StyledMain>
  );
};

export default Login;
