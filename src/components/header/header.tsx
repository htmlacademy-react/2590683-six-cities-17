import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import BookmarkCounter from './bookmark-counter';
import {
  getAuthorizationStatus,
  getUserData,
} from '../../store/user-process/selectors';
import { AuthorizationStatus, StatusForAuthAction } from '../../consts';
import HeaderLeftSide from './header-left-side';
import { toast } from 'react-toastify';

function Header() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);

  const logoutHandler = () => {
    const handleSubmit = async () => {
      try {
        await dispatch(logoutAction()).unwrap();
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'Произошла неизвестная ошибка';

        toast.error(errorMessage, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    };
    void handleSubmit();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLeftSide />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthorizationStatus.Auth ? (
                <>
                  <li className="header__nav-item user">
                    <div className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <Link to={'/favorites'}>
                        <span className="header__user-name user__name">
                          {userData?.email}
                        </span>
                        <BookmarkCounter />
                      </Link>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <div className="header__nav-link" onClick={logoutHandler}>
                      <span className="header__signout">
                        {StatusForAuthAction.SignOut}
                      </span>
                    </div>
                  </li>
                </>
              ) : (
                <Link to="/login">
                  <li className="header__nav-item user">
                    <div className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">
                        {StatusForAuthAction.SignIn}
                      </span>
                    </div>
                  </li>
                </Link>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
