import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemDetails from "./ItemDetails";
import "./styles.css";
import { checkout, setProducts } from "../redux_store/action/productsAction";
import { getProducts } from "../FetchedItems";

function findTotal(productCart, products) {
  let sum = 0;
  productCart.forEach(
    (item) => (sum += item.count * products[item.id - 1]?.price)
  );
  sum = sum.toFixed(2);
  return sum;
} // calculates the total value of items in a shopping cart based on the product information and the quantity of each item

function TotalProducts() {
  const { productCart, products } = useSelector((state) => state); //  for selecting data from the Redux store in functional components

  let dispatch = useDispatch();
  // using the useDispatch hook from React-Redux to get the dispatch function in a functional component

  useEffect(() => {
    async function fetchData() {
      let products = await getProducts();
      dispatch(setProducts(products.data));
    }
    fetchData();
  }, [dispatch]);
  //  fetch products asynchronously and update the Redux store using the dispatch function

  const totalAmount = findTotal(productCart, products);
  return (
    <div className="user__cart">
      <div className="left__Cart">
        {productCart.length > 0 ? (
          productCart.map((item, index) => {
            return (
              <ItemDetails key={index} count={item.count} productId={item.id} />
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>No Item in Carts</h3>
        )}
      </div>
      <div className="right__Cart">
        <div>
          <div>Total </div> <div className="cart__price"> ₹ {totalAmount} </div>
        </div>
        <div>
          <div>Discount </div> <div> {0} </div>
        </div>
        <div>
          <div>Total </div> <div className="cart__price"> ₹ {totalAmount} </div>
        </div>
        <button onClick={() => dispatch(checkout())}>checkout Product</button>
      </div>
    </div>
  );
}

export default TotalProducts;
