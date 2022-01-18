import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_REQUEST,
  PRODUCTS_LIST_RESET
} from "../../constants/productsConstants";
import axios, {AxiosResponse} from "axios";

import {getProducts} from "../../../api/services/productsApiMethods";

export function getProductsActionCreators(limit: number = 6) {
  return async (dispatch: DispatchProducts) => {
    dispatch(fetchProductsListRequest());

    await getProducts().then((products) => {
      if (products != null) {
        dispatch(fetchProductsListSuccess(products));
      }
    }).catch((error) => {
      dispatch(fetchProductsListFailure(error));
    });

  }
}

function fetchProductsListRequest(): ProductsAction {
  const action: ProductsAction = {
    type: FETCH_PRODUCTS_REQUEST
  };
  return action;
}

function fetchProductsListSuccess(products: any): ProductsAction {
  const action: ProductsAction = {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {productsList: products}
  };
  return action;
}

function fetchProductsListFailure(errorData: any): ProductsAction {
  const action: ProductsAction = {
    type: FETCH_PRODUCTS_FAILURE,
    payload: {error: errorData}
  };
  return action;
}