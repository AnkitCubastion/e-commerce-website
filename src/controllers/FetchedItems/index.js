import axios from "axios";

export async function getProducts() {
  let url = `https://fakestoreapi.com/products`;
  const products = await axios.get(url).catch((err) => console.log(err));
  return products;
} // makes a request to API to fetch a list of products

export async function getProductsWithId(id) {
  let url = `https://fakestoreapi.com/products/${id}`;
  const products = await axios.get(url).catch((err) => console.log(err));
  return products;
} // makes a request to a specific product endpoint by appending the id to the base URL
