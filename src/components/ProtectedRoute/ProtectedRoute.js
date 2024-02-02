import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component, ...props }) {
  return localStorage.getItem('token') ? (
    <Component {...props} />
  ) : (
    <Navigate
      to='/sign-in'
      replace
    />
  );
}
