import { apiCredentials } from '../utils/consts';

// Регистрации пользователя:

export const register = (password, email, name) => {
  return fetch(`${apiCredentials}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email, name }),
  }).then((response) => {
    const status = response.status;
    if (response.ok) {
      return response.json().then((data) => {
        return { data, status };
      });
    } else {
      return response.json().then((data) => {
        return { data, status };
      });
    }
  });
};

//Авторизация пользователя:

export const authorize = (password, email) => {
  return fetch(`${apiCredentials}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  }).then((response) => {
    const status = response.status;
    return response.json().then((data) => {
      return { data, status };
    });
  });
};

//Для проверки токена и получения email:

export const checkTokenValidity = (token) => {
  return fetch(`${apiCredentials}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
    })
    .then((data) => data);
};
