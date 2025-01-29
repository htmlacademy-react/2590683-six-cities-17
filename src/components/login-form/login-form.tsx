import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute, LoginInputNames, StatusForAuthAction } from '../../consts';
import { toast } from 'react-toastify';
import React from 'react';
import { isValidPassword } from '../../helpers/is-password-valid';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidPassword(password)) {
      dispatch(loginAction({ email, password }))
        .unwrap()
        .then(() => {
          setEmail('');
          setPassword('');
          navigate(AppRoute.Root);
        })
        .catch((error: { message: string }) => {
          toast.error(error.message, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        });
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">{StatusForAuthAction.SignIn}</h1>
      <form className="login__form form" onSubmit={submitHandler}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">{LoginInputNames.EMail}</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">{LoginInputNames.Password}</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login__submit form__submit button" type="submit">
          {StatusForAuthAction.SignIn}
        </button>
      </form>
    </section>
  );
}
