/* import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';
function App() {
  return (
    <div className="App">
      <header>
         <h1>SINGLE CYLINDER SOLENOID ENGINE</h1>
        <Form/>
        <UserList/>
      </header>
    </div>
  );
}

export default App; */

// App.js
import React, { useState } from 'react';
import './App.css';
import AuthPage from './components/AuthPage';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header>
        <h1>SINGLE CYLINDER SOLENOID ENGINE</h1>
        {isLoggedIn ? (
          <>
            <Form />
            <UserList />
          </>
        ) : (
          <AuthPage onLoginSuccess={handleLoginSuccess} />
        )}
      </header>
    </div>
  );
}

export default App;

