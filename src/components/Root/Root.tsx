import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from '@navigation';
// import Notifications from '../Notifications';
import { useSelector } from 'react-redux';

const Root = () => {
  return (
    <BrowserRouter>
      {/*<Notifications />*/}
      <Navigation isLoggedIn={true} userRole={'user'} />
    </BrowserRouter>
  );
};

export default Root;
