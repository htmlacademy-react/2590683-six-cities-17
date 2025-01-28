import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import LoginForm from '../../components/login-form/login-form';
import LoginLocationsItem from '../../components/login-locations-item/login-locations-item';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import HeaderLeftSide from '../../components/header/header-left-side';

export default function LoginPage() {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLeftSide />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <LoginLocationsItem />
        </div>
      </main>
    </div>
  );
}
