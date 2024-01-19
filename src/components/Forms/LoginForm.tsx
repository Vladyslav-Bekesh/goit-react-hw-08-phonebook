import { useDispatch } from 'react-redux';
import { FormEvent } from 'react';
import { logIn } from '../../redux/auth/AuthOperations';
import { useState } from 'react';

import { TextButton } from '../TextButton/TextButton';

import { FormCss, FormLabelCss, FormInputCss } from './Forms.styled';

type TChekButtonActive = () => boolean;

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    dispatch(
      logIn({
        email,
        password,
      }) as any
    );
    form.reset();
  };

  const chekButtonActive: TChekButtonActive = () => {
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
