import React from 'react';
import Films from '@screens/Films';
import Characters from '@screens/Characters';
import Login from '@screens/Login';
import { Navigate } from 'react-router-dom';

export const routes = (isLoggedIn, userRole) => {
  switch (userRole) {
    case 'user':
      return [
        { path: '/', element: <Login/> },
        { path: '/Films', element: isLoggedIn || true ? <Films /> : <Navigate to="/" /> }, // TODO fix when BAE
        { path: '/Characters', element: isLoggedIn || true ? <Characters /> : <Navigate to="/" /> }, // TODO fix when BAE
      ];
    default: {
      return   [
        { path: '/', element: <Login/> },
        { path: '/Films', element: isLoggedIn || true ? <Films /> : <Navigate to="/" /> }, // TODO fix when BAE
      ];
    }
  }
};
