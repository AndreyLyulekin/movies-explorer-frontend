export default function Profile({ setIsLoggedIn, user }) {
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {user.name}!</h1>
      <div className='profile__container'>
        <span className='profile__text'>Имя</span>
        <span className='profile__text'>{user.name}</span>
      </div>
      <hr className='profile__line' />
      <div className='profile__container'>
        <span className='profile__text'>E-mail</span>
        <span className='profile__text'>{user.email}</span>
      </div>
      <button className='profile__btn profile__edit util__button'>Редактировать</button>
      <button
        onClick={() => setIsLoggedIn(false)}
        className='profile__btn profile__logout util__button'>
        Выйти из аккаунта
      </button>
    </section>
  );
}
