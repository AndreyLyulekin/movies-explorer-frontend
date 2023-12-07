import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className='notFound'>
      <h1 className='notFound__title'>404</h1>
      <p className='notFound__description'>Страница не найдена</p>
      <button
        className='notFound__goBack'
        onClick={goBack}>
        Назад
      </button>
    </section>
  );
}
