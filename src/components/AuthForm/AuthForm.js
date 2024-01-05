import { useEffect, useState } from 'react';

import { validateEmail, validatePassword, validateName } from '../index.js';

export default function AuthForm({ location, handleAuth, onSignup, onSignin }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleRegisterClick(e) {
    e.preventDefault();

    if (Object.keys(errors).length > 0 || !formData.email || !formData.password || !formData.name) {
      setErrors((prev) => ({ ...prev, serverError: 'Поля пустые или заполнены некорректно' }));
      return;
    }

    if (isLoading) {
      return;
    }

    onSignup(e, setIsLoading, formData, handleLoginClick, setErrors);
  }

  function handleLoginClick(e) {
    e.preventDefault();

    if (Object.keys(errors).length > 0 || !formData.email || !formData.password) {
      setErrors((prev) => ({ ...prev, serverError: 'Поля пустые или заполнены некорректно' }));
      return;
    }

    if (isLoading) {
      return;
    }
    onSignin(setIsLoading, formData, setErrors);
  }

  const handleInputEvent = (key, e) => {
    if (errors.serverError || key === 'email') {
      setErrors((prev) => (delete prev.serverError, { ...prev }));
    }

    setFormData((prev) => ({
      ...prev,
      [key]: e,
    }));
  };

  useEffect(() => {
    setFormData((prev) => (delete prev.name, { ...prev }));
    setErrors({});
  }, [location]);

  useEffect(() => {
    validateEmail(formData, setErrors);
    validatePassword(formData, setErrors);
    validateName(formData, setErrors);
  }, [formData]);

  return (
    <form
      className='auth__form'
      onSubmit={location === '/sign-in' ? (e) => handleLoginClick(e) : (e) => handleRegisterClick(e)}>
      {location === '/sign-in' ? (
        ''
      ) : (
        <>
          <label
            className='auth__label'
            htmlFor='email'>
            Имя
          </label>
          <input
            className='auth__input'
            onChange={(e) => handleInputEvent('name', e.target.value)}
            id='name'
          />
          <span className={`auth__input_message`}>{errors.nameInputErrorLength || errors.nameInputErrorPattern}</span>
        </>
      )}

      <label
        className='auth__label'
        htmlFor='email'>
        E-mail
      </label>
      <input
        className='auth__input'
        onChange={(e) => handleInputEvent('email', e.target.value)}
        id='email'
      />
      <span className={`auth__input_message`}>{errors.emailInputErrorPattern}</span>

      <label
        className='auth__label'
        htmlFor='password'>
        Пароль
      </label>
      <input
        type='password'
        name='password'
        className='auth__input'
        onChange={(e) => handleInputEvent('password', e.target.value)}
        id='password'
      />
      <span className={`auth__input_message`}>{errors.passwordInputErrorLength}</span>

      <span
        className={`auth__server_message ${
          location === '/sign-in' ? 'auth__server_message-login' : 'auth__server_message-register'
        }`}>
        {errors.serverError}
      </span>
      <button
        type='submit'
        className={`auth__btn util__button ${Object.entries(errors).length > 0 ? `auth__btn_inactive` : ''}`}>
        {location === '/sign-in' ? 'Войти' : 'Зарегистрироваться'}
      </button>
    </form>
  );
}
