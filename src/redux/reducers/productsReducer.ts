import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  PRODUCTS_LIST_RESET
} from "../constants/productsConstants";
import {Product} from "../../api/models/Product";

const initialState: ProductsState = {
  loading: true,
  productsList: [],
  error: null
};

export const productsReducer = (state: ProductsState = initialState, action: ProductsAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        productsList: !action.payload ? [{error: 'error'}] : action.payload?.productsList.map((item: any, index: number) => {
          return new Product(
            item.id,
            item.title,
            item.description,
            item.gallery,
            item.isBestPrice,
            item.isNew,
            item.rate,
            item.dateCreated,
          );
        }),
        error: null
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        productsList: [],
        error: action.payload?.error
      };
    case PRODUCTS_LIST_RESET:
      return {
        loading: false,
        productsList: [],
      };
    default:
      return state
  }
};