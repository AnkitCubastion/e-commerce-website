import { ActionTypes } from "../constants/actionType";

const {
  UPDATE_PRODUCT_COUNTER,
  SET_CHECKOUT,
  INCREMENT,
  DECREMENT,
  SET_PRODUCTS,
} = ActionTypes; // destructuring to extract action types

export function increment(id) {
  const payload = {
    id: id,
    updateType: INCREMENT,
  };
  // console.log("THis is payload ", payload);
  return { type: UPDATE_PRODUCT_COUNTER, payload };
} // creates an action object with a specific structure, including a type and a payload

export function decrement(id) {
  const payload = {
    id: id,
    updateType: DECREMENT,
  };
  // console.log("THis is payload ", payload);
  return { type: UPDATE_PRODUCT_COUNTER, payload };
} // creates an action object with a specific structure, including a type and a payload

export function setProducts(products) {
  return { type: SET_PRODUCTS, payload: products };
} // similar to the increment action creator but a different updateType

export function checkout() {
  console.log("This function have called");
  return { type: SET_CHECKOUT };
} // logs a message to the console and returns an action object with a type of SET_CHECKOUT
