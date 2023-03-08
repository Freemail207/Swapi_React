/* eslint-disable */
import appConfig from '../app.config';

// @ts-ignore
import md5 from 'md5';

export const ORIGIN_URL = appConfig.ORIGIN_URL;
export const IS_DEV: boolean = appConfig.ENV === 'development';
export const AUTH_STORAGE_KEY = 'authInfo';

export const adminPanelRouts = {
    USERS: '/Customers',
};

export const ROUTES = {
    ...adminPanelRouts,
};

export const routesOrder = [
    ROUTES.USERS
];
