import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux_store/action/productsAction";
import "./styles.css";
import { useEffect, useState } from "react";
import { getProductsWithId } from "../FetchedItems/index";

export default function Cart() {
  const { productCart } = useSelector((state) => state);

  const [getProduct, setGetProduct] = useState({});

  let { productId } = useParams(); // to extract parameters from the URL

  useEffect(() => {
    async function fetchProduct(productId) {
      let fetchedProduct = await getProductsWithId(productId);
      setGetProduct(fetchedProduct.data);
    }
    fetchProduct(productId);
  }, [productId]);
  //  fetch product data based on the productId parameter using an asynchronous function 

  const [isPresent, setPresent] = useState(false);

  const dispatch = useDispatch();

  useState(() => {
    let obj = productCart.find(
      (item) => parseInt(item.id) === parseInt(productId)
    );
    if (obj) setPresent(true);
    else setPresent(false);
  }, [productId]);
  // set the initial state based on whether a product with a specific productId is present in the productCart

  function addToCartItem(id) {
    dispatch(increment(id));
    setPresent(true);
  } // dispatches an action to increment the quantity of an item with id, and then sets the local state variable isPresent to true

  function addItemToCart(id) {
    !isPresent && dispatch(increment(id));
  } // dispatches an action to increment the quantity of an item with a given id based on the isPresent state

  // console.log(getProduct);
  return (
    <div className="product_details">
      <div className="left_product_details">
        <img src={getProduct?.image} alt={getProduct?.title} />
        <div className="card__button">
          {!isPresent ? (
            <button
              className="addToCart_button"
              onClick={() => addToCartItem(productId)}
            >
              Add To Cart
            </button>
          ) : (
            <Link to="/cart">
              <button className="addToCart_button">Go to Cart</button>
            </Link>
          )}
          <Link to="/cart">
            <button
              onClick={() => addItemToCart(productId)}
              className="buyNow_button"
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
      <div className="right_product_details">
        <div className="title">{getProduct?.title}:</div>
        <div className="price">
          <span className="rupee">₹</span>
          {getProduct?.price}
        </div>
        <div className="rating">
          {getProduct?.rating?.rate} <span className="start_icon">★</span>
        </div>
        <div className="description">
          <h4>Product Details:</h4>
          <div className="product__description"> {getProduct?.description}</div>
        </div>
      </div>
    </div>
  );
}
