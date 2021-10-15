interface IImage {
  id: string,
  url: string
}

interface SlickImage extends IImage {
  caption?: string
}

interface IPayload {
  isAuthorized?: boolean,
  codesList?: Array<string>,
  usersList?: Array,
  productsList?: Array,
  error?: {} | string,
  redirectTo?: string | null
}

interface IReduxAction {
  type: string,
  payload?: IPayload,
  error?: string
}


interface AuthState {
  loading: boolean,
  codesList: Array<string>,
  isAuthorized: boolean,
  error: string | null
}

interface AuthAction extends IReduxAction {
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

interface UsersAction extends IReduxAction {
}

type DispatchUsers = (args: UsersAction) => UsersAction;

interface IProduct {
  id: string,
  title: string,
  description: string,
  gallery: Array<string>,
  isNew: boolean,
  isBestPrice: boolean,
  rate: number,
  dateCreated: string
}

interface IPost {
  id: string,
  title: string,
  description: string,
  highlighted: boolean,
  author: string,
  dateCreated: string,
  categories: Array<string>,
  gallery: Array<string>
}

interface ProductsState {
  loading: boolean,
  productsList: Array<IProduct>,
  error: any
}

interface ProductsAction extends IReduxAction {
}

type DispatchProducts = (args: ProductsAction) => ProductsAction;