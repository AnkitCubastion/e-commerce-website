import React, { useEffect } from "react";
import Card from "../cards/component";
import { getProducts } from "../FetchedItems";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux_store/action/productsAction";
import { updateProductWithItsCount } from "./helperMethods";

export default function Body() {

  let dispatch = useDispatch();
  //  use it to dispatch actions to the Redux store
  let { products, productCart } = useSelector((state) => state);
  // takes a selector function as an argument
  
  useEffect(() => {
    async function fetchData() {
      let products = await getProducts();
      dispatch(setProducts(products.data));
    }
    fetchData();
  }, [dispatch]);
  // useEffect used to fetch data and dispatch an action

  const updatedProductWithCount = updateProductWithItsCount(
    products,
    productCart
  );
  // performs logic to update the products in productCart

  return (
    <div className="product__container flex-function">
      <div className="product__subcontainer flex-function">
        {updatedProductWithCount.map((item, index) => (
          <Card
            item={item} //passing the item variable as a prop to the <Card>
            id={index + 1} //id prop is set to index + 1
            key={Math.random() * products.length + index} //key prop is set to dynamically generated value using Math.random() function
          />
        ))}
      </div>
    </div>
  );
}
