import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/AuthOperations';
import { useState } from 'react';

import { TextButton } from '../TextButton/TextButton';

import { FormCss, FormLabelCss, FormInputCss } from './Forms.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
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

  const chekButtonActive = () => {
    if (email === '' || password === '') {
      return true;
    }
    return false;
  };

  return (
    <FormCss onSubmit={handleSubmit} autoComplete="off">
      <FormLabelCss>
        Email
        <FormInputCss
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormLabelCss>

      <FormLabelCss>
        Password
        <FormInputCss
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormLabelCss>

      <TextButton type="submit" disabled={chekButtonActive()} text={'Log In'} />
    </FormCss>
  );
};
