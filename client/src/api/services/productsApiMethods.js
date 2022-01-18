import axios from "axios";

export async function getProducts(count = 5) {
  const productsList = await axios.get(process.env.REACT_APP_API_PRODUCTS_LIST, {
    params: {
      count: count
    }
  });
  return productsList.data.products;
}