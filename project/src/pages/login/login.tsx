import React, { } from 'react';
import Header from '../../components/header/header';
import GoToCityButton from '../../components/favorites/login/go-to-city-button/go-to-city-button';
import LoginForm from '../../components/favorites/login/login-form/login-form';

const Login: React.FC = () => (
  <div className="page page--gray page--login">
    <Header isHideUserSection />

    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <LoginForm />
        <GoToCityButton />
      </div>
    </main>
  </div>
);

export default Login;
