import React, { useState } from 'react';
import Input from '../components/Input';
import { initialState } from '../utils';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { validEmail } from '../utils/validations';

export default function Login() {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setState({ ...state, [id.toLocaleLowerCase()]: value });
  };

  const shouldDisableButton = () => {
    const invalidEmail = !validEmail(state.email);
    const emptyName = state.name === '';
    const emptyPassword = state.password === '';
    return invalidEmail || emptyName || emptyPassword;
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify(state));
    navigate('/movies');
  };

  return (
    <form>
      <Input
        value={ state.name }
        onChange={ handleChange }
        label="Name"
      />
      <Input
        value={ state.email }
        onChange={ handleChange }
        label="Email"
      />
      <Input
        value={ state.password }
        type="password"
        onChange={ handleChange }
        label="Password"
      />
      <Button
        value="Entrar"
        onClick={ handleClick }
        disabled={ shouldDisableButton() }
      />
    </form>
  );
}
