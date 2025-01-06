import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { isAuth } from '../../mocks';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) =>
  isAuth ? <Route {...rest} element={element} /> : <Navigate to="/login" />;

export default PrivateRoute;
