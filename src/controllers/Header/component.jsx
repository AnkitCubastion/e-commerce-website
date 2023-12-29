import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function countProduct(product) {
  let count = 0;
  product.forEach((element) => {
    count += element.count;
  });
  return count;
} //  calculate the total count of (count) across all elements in array

function Header() {
  let store = useSelector((state) => state).productCart;
  // access the productCart property from the Redux state

  return (
    <div className="header">
      <div className="header__subcontainer">
        <div className="header_icon">
          <Link to="/"> Home </Link>
        </div>
        <div className="header_icon">
          <Link to="/login"> Login </Link>
        </div>
        <div className="header_icon">
          <Link to="/signup"> Signup </Link>
        </div>
        <Link to="/cart">
          {" "}
          <div className="header__cart">
            🛒<span className="product__count"> ({countProduct(store)})</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
