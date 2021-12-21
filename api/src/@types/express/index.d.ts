import {IClientData} from '@shared/JwtService';
import {IProduct} from "@entities/Product";


declare global {
  namespace Express {
    export interface Response {
      sessionUser: IClientData;
    }
  }
}
