import { Container, StyledMain } from 'components/StyledComponents/SC';

const {
  default: RegisterForm,
} = require('components/RegisterForm/RegisterForm');

const Register = () => {
  return (
    <StyledMain>
      <Container>
        <RegisterForm />
      </Container>
    </StyledMain>
  );
};

export default Register;
