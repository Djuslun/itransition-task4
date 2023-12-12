export interface IUserLoginRequestBody {
  email: string;
  password: string;
}

export interface IUserRegistrationRequestBody extends IUserLoginRequestBody{
  name: string;
}

export interface IUser extends Omit<IUserRegistrationRequestBody, 'password'> {
  id: string;
  isActive: boolean;
  last_login: string | Date;
}