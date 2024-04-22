import React, { useState } from 'react';
import Input from '../components/Input';
import { initialState } from '../types';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { validEmail } from '../utils/validations';
import '../css/Login.css';

export default function Login() {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
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
    <main className="login-page-container">
      <form className="form">
        <Input
          value={ state.name }
          onChange={ handleChange }
          id="name"
          placeholder="Nome"
          className="input-login"
        />
        <Input
          value={ state.email }
          onChange={ handleChange }
          id="email"
          placeholder="Email"
          className="input-login"
        />
        <Input
          value={ state.password }
          type="password"
          onChange={ handleChange }
          id="password"
          placeholder="Senha"
          className="input-login"
        />
        <Button
          value="Entrar"
          onClick={ handleClick }
          disabled={ shouldDisableButton() }
          className="login-button"
        />
      </form>
    </main>
  );
}
