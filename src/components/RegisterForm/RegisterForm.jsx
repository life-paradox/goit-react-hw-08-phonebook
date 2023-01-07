import { Form, FormLabel } from 'components/StyledComponents/SC';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    const form = e.currentTarget;
    // const newContact = { name: form.name.value, number: form.number.value };

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormLabel>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Full name"
          required
          autoComplete="false"
        />
      </FormLabel>
      <FormLabel>
        Email
        <input
          type="email"
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

      <button type="submit">Sign up</button>
    </Form>
  );
};

export default RegisterForm;
