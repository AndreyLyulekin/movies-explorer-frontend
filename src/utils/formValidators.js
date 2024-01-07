const nameValidationPattern = /^[a-zA-Zа-яА-ЯЁё\s-]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (formData, setter) => {
  if (formData.email?.length >= 1) {
    emailPattern.test(formData.email)
      ? setter((prev) => (delete prev.emailInputErrorPattern, { ...prev }))
      : setter((prev) => ({
          ...prev,
          emailInputErrorPattern: 'Введите Email',
        }));
  }
};

export const validatePassword = (formData, setter) => {
  if (formData.password?.length < 2 || formData.password?.length > 30) {
    setter((prev) => ({
      ...prev,
      passwordInputErrorLength: 'Пароль должен содержать от 2 до 30 символов',
    }));
  } else {
    setter((prev) => (delete prev.passwordInputErrorLength, { ...prev }));
  }
};

export const validateName = (formData, setter) => {
  if (formData.name?.length < 2 || formData.name?.length > 30) {
    setter((prev) => ({
      ...prev,
      nameInputErrorLength: 'Имя должно содержать от 2 до 30 символов',
    }));
  } else {
    setter((prev) => (delete prev.nameInputErrorLength, { ...prev }));
  }

  if (formData.name?.length >= 1) {
    nameValidationPattern.test(formData.name)
      ? setter((prev) => (delete prev.nameInputErrorPattern, { ...prev }))
      : setter((prev) => ({
          ...prev,
          nameInputErrorPattern: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис',
        }));
  }
};
