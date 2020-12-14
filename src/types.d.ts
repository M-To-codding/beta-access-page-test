interface AuthState {
  loading: boolean,
  codesList: Array<string>,
  isAuthorized: boolean,
  error: string | null
}

interface AuthAction {
  type: string,
  payload?: Array<string> | boolean,
  additionalProp?: {} | string
}

type DispatchAuth = (args: AuthAction) => AuthAction;

interface IPhoto {
  large: string,
  medium: string,
  thumbnail: string
}

interface IUser {
  id: string,
  name: string,
  surname: string,
  gender: string,
  dateOfBirth: string,
  photo?: IPhoto,
  phone: string,
  email: string
}

interface UsersState {
  loading: boolean,
  usersList: Array<IUser>,
  error: any
}

interface UsersAction {
  type: string,
  payload?: Array<any>
}

type DispatchUsers = (args: UsersAction) => UsersAction;