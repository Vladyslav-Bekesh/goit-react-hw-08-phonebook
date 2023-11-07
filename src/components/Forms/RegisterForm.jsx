import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/AuthOperations';
import { FormCss, FormLabelCss, FormInputCss } from './Forms.styled';
import { TextButton } from '../TextButton/TextButton';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    formReset();
  };

  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const chekButtonActive = () => {
    if (name === '' || email === '' || password === '') {
      return true;
    }
    return false;
  };

  return (
    <FormCss onSubmit={handleSubmit} autoComplete="off">
      <FormLabelCss>
        Username
        <FormInputCss
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormLabelCss>

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
      <TextButton
        type="submit"
        disabled={chekButtonActive()}
        text={'Register'}
      />
    </FormCss>
  );
};
