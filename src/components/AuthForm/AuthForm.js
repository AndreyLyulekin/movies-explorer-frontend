import { useEffect, useState } from 'react';

export default function AuthForm({ location }) {
  const [formData, setFormData] = useState({});

  const handleInputEvent = (key, e) => {
    setFormData((prev) => ({
      ...prev,
      [key]: e,
    }));
  };

  useEffect(() => {
    setFormData((prev) => (delete prev.name, { ...prev }));
  }, [location]);

  return (
    <form className='auth__form'>
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

      <button
        type='submit'
        className='auth__btn'>
        {location === '/sign-in' ? 'Войти' : 'Зарегистрироваться'}
      </button>
    </form>
  );
}
