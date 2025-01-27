import React from 'react';
import { useAppSelector } from '../hooks';
import LoadingScreen from '../pages/loading-screen/loading-screen';

const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthLoading = useAppSelector((state) => state.USER.authLoadingStatus);
  const isLoading = isAuthLoading;

  if (isLoading) {
    return <LoadingScreen />;
  }
  return <>{children}</>;
};

export default LoaderProvider;
