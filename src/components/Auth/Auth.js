import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Logo, AuthForm } from '../index.js';

export default function Auth() {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [underFormHelper, setUnderFormHelper] = useState({});

  useEffect(() => {
    switch (location.pathname) {
      case '/sign-in':
        setUnderFormHelper({
          text: 'Ещё не зарегистрированы?',
          linkText: 'Регистрация',
          linkTo: '/sign-up',
        });
        setTitle('Рады видеть!');
        break;
      case '/sign-up':
        setUnderFormHelper({
          text: 'Уже зарегистрированы?',
          linkText: 'Войти',
          linkTo: '/sign-in',
        });
        setTitle('Добро пожаловать!');
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <section className='auth'>
      <Link to='/'>
        <Logo />
      </Link>
      <h1 className='auth__title'>{title}</h1>
      <AuthForm location={location.pathname} />
      <p className='auth__link_description'>
        {underFormHelper.text}
        <Link
          className='auth__link'
          to={underFormHelper.linkTo}>
          {underFormHelper.linkText}
        </Link>
      </p>
    </section>
  );
}
