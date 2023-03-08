export interface IAuthState {
  authInfo?: {
    access_token?: string;
    [key: string]: any;
  };
  userInfo?: IUserInfo;
  signInResponse?: any;
}

export interface ISignInData {
  email: string;
  password: string;
}

export enum UserRole {
  admin = 'admin',
  picker = 'picker'
}

export interface IUserInfo {
  uuid: string;
  email: string;
  created_at: string;
  first_name: string;
  last_name: string;
  phone?: string;
  orders_count: number;
  role: UserRole | string;
}
