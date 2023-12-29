import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux_store/action/productsAction";
import { getProductsWithId } from "../FetchedItems";

function ItemDetails({ productId, count }) {
  let dispatch = useDispatch();
  // using the useDispatch hook from React-Redux to obtain the dispatch function in a functional component

  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct(productId) {
      let fetchedProduct = await getProductsWithId(productId);
      setProduct(fetchedProduct.data);
    }
    fetchProduct(productId);
  }, [productId]);
  // fetch a product with a specific ID and update the component's state using the setProduct function

  function increaseProductQuantity(id) {
    dispatch(increment(id));
  } // dispatches an action to increment the quantity of a product with a specified ID

  function decreaseProductQuantity(id) {
    dispatch(decrement(id));
  } // dispatches an action to decrement the quantity of a product with a specified ID

  return (
    <div className="item__details">
      <div className="item__left">
        <div className="item_left__img">
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className="item__button">
          <button onClick={() => decreaseProductQuantity(productId)}>-</button>
          {count}
          <button onClick={() => increaseProductQuantity(productId)}>+</button>
        </div>
      </div>
      <div className="item__right">
        <p>{product?.title}</p>
        <p>₹{product?.price}</p>
      </div>
    </div>
  );
}

export default ItemDetails;
