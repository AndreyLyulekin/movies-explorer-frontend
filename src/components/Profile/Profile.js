import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { UserContext, userService, validateEmail, validateName, Popup } from '../index.js';

export default function Profile({ setIsLoggedIn }) {
  const [isResGood, setIsResGood] = useState(false);
  const navigate = useNavigate();
  const [isEditBegin, setIsEditBegin] = useState(false);
  const [formData, setFormData] = useState({});
  const { user, setUser } = useContext(UserContext);
  const [serverErrorText, setServerErrorText] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputEvent = (key, e) => {
    setErrors((prev) => (delete prev.serverError, { ...prev }));
    setFormData((prev) => ({
      ...prev,
      [key]: e,
    }));
  };

  function LogOut(e) {
    e.preventDefault();

    setIsLoggedIn((prev) => !prev);
    setUser((prev) => ({
      ...prev,
      name: '',
      email: '',
    }));
    localStorage.removeItem('token');
    localStorage.removeItem('formData');
    navigate('/');
  }

  function editProfile() {
    setIsEditBegin((prev) => !prev);
  }

  function updateUser(e) {
    e.preventDefault();

    if (
      e.target?.className?.includes('profile__button_disabled') ||
      Object.keys(errors).length > 0 ||
      !formData.email ||
      !formData.name
    ) {
      setErrors((prev) => ({ ...prev, serverError: 'Поля пустые или заполнены некорректно' }));
      return;
    }

    userService
      .updateUserInfo(formData)
      .then((response) => {
        setIsResGood((prev) => !prev);
        setTimeout(() => {
          setUser((prev) => ({
            ...prev,
            name: response.name,
            email: response.email,
          }));
        }, 1000);
      })
      .catch((err) => {
        if (err === 'Error: 409') {
          setIsEditBegin(true);
          setServerErrorText('Пользователь с таким email уже существует.');
        } else {
          setIsEditBegin(true);
          setServerErrorText('При обновлении профиля произошла ошибка.');
        }
      });
  }

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      name: user.name,
      email: user.email,
    }));
  }, []);

  useEffect(() => {
    validateEmail(formData, setErrors);
    validateName(formData, setErrors);
  }, [formData]);

  useEffect(() => {
    setTimeout(() => {
      setIsResGood(false);
    }, 1000);
  }, [isResGood]);

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {user.name}!</h1>
      <span className='profile__error_input'>{errors.nameInputErrorLength || errors.nameInputErrorPattern}</span>
      <div className='profile__container'>
        <label
          htmlFor='name'
          className='profile__text'>
          Имя
        </label>
        <input
          id='name'
          className={`profile__input ${isEditBegin ? '' : 'profile__input_notEditeble'}`}
          value={formData.name}
          readOnly={!isEditBegin}
          onChange={(e) => handleInputEvent('name', e.target.value)}
        />
      </div>
      <hr className='profile__line' />
      <div className='profile__container'>
        <label
          htmlFor='email'
          className='profile__text'>
          E-mail
        </label>
        <input
          id='email'
          className={`profile__input ${isEditBegin ? '' : 'profile__input_notEditeble'}`}
          value={formData.email}
          readOnly={!isEditBegin}
          onChange={(e) => handleInputEvent('email', e.target.value)}
        />
      </div>
      <span className='profile__error_input'>{errors.emailInputErrorPattern}</span>
      {isEditBegin ? (
        <>
          <span className='profile__error'>{serverErrorText}</span>
          <button
            className={`profile__btn_save util__button ${
              formData.name === user.name && formData.email === user.email ? 'profile__button_disabled' : ''
            }  ${Object.entries(errors).length > 0 ? `profile__button_disabled` : ''}`}
            onClick={(e) => updateUser(e)}>
            Сохранить
          </button>
          <button
            className='profile__back'
            onClick={editProfile}>
            Назад
          </button>
        </>
      ) : (
        <>
          <button
            className='profile__btn profile__edit util__button'
            onClick={editProfile}>
            Редактировать
          </button>
          <button
            onClick={(e) => LogOut(e)}
            className='profile__btn profile__logout util__button util__button'>
            Выйти из аккаунта
          </button>
        </>
      )}
      {isResGood && <Popup />}
    </section>
  );
}
