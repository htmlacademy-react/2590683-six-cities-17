import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../consts';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthLoading = useAppSelector((state) => state.USER.authLoadingStatus);

  if (isAuthLoading) {
    return <LoadingScreen />;
  }

  return authorizationStatus === AuthorizationStatus.Auth ? (
    element
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
