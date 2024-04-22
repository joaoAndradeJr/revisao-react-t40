import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  };

  const isButtonDisabled = () => {
    const invalidName = state.name.length === 0
    const invalidEmail = !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(state.email);
    const invalidPassword = state.password.length < 4;
  
    return invalidName || invalidEmail || invalidPassword;
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify(state));
    navigate('/movies');
  };

  return (
    <form>
      <input
        name="name"
        type="text"
        value={ state.name }
        onChange={ handleChange }
      />
      <input
        name="email"
        type="text"
        value={ state.email }
        onChange={ handleChange }
      />
      <input
        name="password"
        type="password"
        value={ state.password }
        onChange={ handleChange }
      />
      <button
        type="button"
        disabled={ isButtonDisabled() }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}
