import { ActionTypes } from "../constants/actionType";

const initialState = {
  productCart: JSON.parse(localStorage.getItem("productCart")) || [],
  products: [],
}; // defining an initial state

function getProductDetail(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item.id === id) return i;
  }
  return -1;
} // searches for an item with a specific id in an array

function updateProduct(requiredProduct, payload) {
  if (payload.updateType === "INCREMENT") {
    requiredProduct.count += 1;
    return requiredProduct;
  } else {
    requiredProduct.count =
      requiredProduct.count > 0 ? requiredProduct.count - 1 : 0;
    if (requiredProduct.count === 0) return;
    return requiredProduct;
  }
} // updates a given product based on a specified payload

function addProductInCart(payload) {
  if (payload.updateType === "INCREMENT") {
    return {
      id: payload.id,
      count: 1,
    };
  }
} // adds a product to a cart based on a specified payload

function updateproductCounter(state, payload) {
  let updatedCart = state.productCart;
  let productIndex = getProductDetail(updatedCart, payload.id);
  if (productIndex !== -1) {
    let updatedProduct = updateProduct(updatedCart[productIndex], payload);
    if (updatedProduct) updatedCart[productIndex] = updatedProduct;
    else updatedCart = updatedCart.filter((item) => item.count !== 0);
  } else {
    let obj = addProductInCart(payload);
    if (obj) updatedCart.push(obj);
  }
  return updatedCart;
} // updates the product count in a shopping cart based on a given state and payload

function counterReducer(state = initialState, action) {
  const { UPDATE_PRODUCT_COUNTER, SET_PRODUCTS, SET_CHECKOUT } = ActionTypes;
  switch (action.type) {
    case UPDATE_PRODUCT_COUNTER:
      let updatedProducts = updateproductCounter(state, action.payload);
      localStorage.setItem("productCart", JSON.stringify(updatedProducts));
      return { ...state, productCart: updatedProducts };
    case SET_PRODUCTS:
      const products = action.payload;
      return { ...state, products };
    case SET_CHECKOUT:
      return { ...state, productCart: [] };
    default:
      return state;
  }
} // manages the state related to product counters and products

export default counterReducer;
