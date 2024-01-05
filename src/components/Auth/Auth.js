import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { logo, AuthForm } from '../index.js';

export default function Auth({ handleAuth, onSignup, onSignin }) {
  const location = useLocation();

  const [formHelper, setFormHelper] = useState({});

  useEffect(() => {
    switch (location.pathname) {
      case '/sign-in':
        setFormHelper({
          text: 'Ещё не зарегистрированы?',
          currentPage: 'Регистрация',
          linkTo: '/sign-up',
        });
        break;
      case '/sign-up':
        setFormHelper({
          text: 'Уже зарегистрированы?',
          currentPage: 'Войти',
          linkTo: '/sign-in',
        });
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <section className='auth'>
      <Link
        to='/'
        className='util__link'>
        <img
          src={logo}
          alt='Logo'
        />
      </Link>
      <h1 className='auth__title'>{formHelper.currentPage === 'Регистрация' ? 'Рады видеть!' : 'Добро пожаловать!'}</h1>
      <AuthForm
        location={location.pathname}
        handleAuth={handleAuth}
        onSignup={onSignup}
        onSignin={onSignin}
      />
      <p className='auth__link_description'>
        {formHelper.text}
        <Link
          className='auth__link util__link'
          to={formHelper.linkTo}>
          {formHelper.currentPage}
        </Link>
      </p>
    </section>
  );
}
