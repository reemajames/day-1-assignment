import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './user-login/Store';
import Login from './user-login/Login';
import Dashboard from './user-login/dashboard';
import Profile from './user-login/Profile';
import EducationDetails from './user-login/Education';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={Login} />
          <Route path="/dashboard" element={Dashboard} />
          <Route path="/profile" element={Profile} />
          <Route path="/education" element={EducationDetails} />
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;