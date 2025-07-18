import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import App from './App';

function RedirectToLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/") {
      navigate('/user/login', { replace: true });
    }
  }, [navigate, location]);
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RedirectToLogin />
    <App />
  </BrowserRouter>
);
