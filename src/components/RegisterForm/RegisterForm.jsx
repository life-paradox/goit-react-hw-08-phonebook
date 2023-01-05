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
    <form onSubmit={submitHandler}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Full name"
          required
          autoComplete="false"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
          title="Email in format example@gmail.com "
          required
          autoComplete="true"
        />
      </label>
      <label>
        Password
        <input type="password" name="password" title="Password" required />
      </label>

      <button type="submit">Sign up</button>
    </form>
  );
};

export default RegisterForm;
