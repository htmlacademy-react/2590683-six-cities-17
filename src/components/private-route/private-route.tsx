import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuth } from '../../mocks/mocks';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) =>
  isAuth ? element : <Navigate to="/login" />;

export default PrivateRoute;
