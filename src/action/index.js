import * as Types from "../constants/ActionTypes";
import callApi from "../utils/CallApi";

export const actFetchRequest = () => {
  return (dispatch) => {
    return callApi('products', "GET", null).then(res => {
      dispatch(actFetchProducts(res.data));
    });
  };
}

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}

export const actDeleteRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "DELETE", null).then(res => {
      dispatch(actDeteleProduct(id));
    });
  }
}

export const actDeteleProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}

export const actAddRequest = (productFromInput) => {
  return dispatch => {
    return callApi("products", "POST", productFromInput).then(res => {
      dispatch(actAddProduct(res.data));
    });
  }
}

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}

export const actGetRequest = (id) => {
  return dispatch => {
    return callApi(`products/${id}`, "GET", null).then(res => {
      dispatch(actGetProduct(res.data));
    });
  }
}

export const actGetProduct = (product) => {
  return {
    type: Types.GET_PRODUCT,
    product
  }
}

export const actUpdateRequest = (product) => {
  return dispatch => {
    return callApi(`products/${product.id}`, "PUT", product).then(res => {
      dispatch(actUpdateProduct(res.data));
    });
  }
}

export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  }
}