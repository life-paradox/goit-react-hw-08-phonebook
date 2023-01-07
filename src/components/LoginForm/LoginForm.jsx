import { Form, FormBtn, FormLabel } from 'components/StyledComponents/SC';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormLabel>
        Email
        <input
          type="text"
          name="email"
          pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
          title="Email in format example@gmail.com "
          required
          autoComplete="true"
        />
      </FormLabel>
      <FormLabel>
        Password
        <input type="password" name="password" title="Password" required />
      </FormLabel>

      <FormBtn>Log In</FormBtn>
    </Form>
  );
};

export default LoginForm;
