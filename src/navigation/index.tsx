import React from 'react';
import { useRoutes } from 'react-router-dom';
import CONFIG from './config';

interface IProps {
  isLoggedIn: boolean;
  userRole: string;
}
const Navigation = (props: IProps) => useRoutes(CONFIG.Public.routes(props.isLoggedIn, props.userRole));

export default Navigation;
