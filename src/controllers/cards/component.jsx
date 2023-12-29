import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux_store/action/productsAction";

export default function Card({ item }) {
  const { image, title, id, count } = item;

  const dispatch = useDispatch();

  function increaseItemQuantity(id) {
    dispatch(increment(id));
  } // takes an id as a parameter and dispatches an action to increment the quantity of an item

  function decreaseItemQuantity(id) {
    dispatch(decrement(id));
  } //  takes an id as a parameter and dispatches an action to decrement the quantity of an item

  return (
    <div className="product__card">
      <div className="card">
        <Link
          to={{
            pathname: `/productDetails/${id}`,
          }}
        >
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="meal_title">
        <p>{title}</p>
      </div>
      <div className="card_addItem">
        <div>
          <button
            onClick={() => decreaseItemQuantity(id)}
            disabled={count === 0 ? true : false}
          >
            -
          </button>{" "}
          {count} <button onClick={() => increaseItemQuantity(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
