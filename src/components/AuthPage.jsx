// AuthPage.jsx
import React, { useState } from 'react';
import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';

const AuthPage = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(true)}>Log In</button>
      <button onClick={() => setIsLogin(false)}>Sign Up</button>
      {isLogin ? <UserLogin onLoginSuccess={onLoginSuccess} /> : <UserSignUp />}
    </div>
  );
};

export default AuthPage;
