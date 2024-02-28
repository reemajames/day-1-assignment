import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registration from './user-login/registration';
import Login from './user-login/login';
import Profile from './user-login/profile';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Hello World!</h1>
        <div>
          <Link to="/registration">Registration</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
        <Routes>
          <Route
            exact
            path="/registration"
            element={<Registration />}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login />}
          ></Route>
          <Route
            exact
            path="/profile"
            element={<Profile />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
