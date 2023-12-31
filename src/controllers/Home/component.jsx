import React from "react";
import Body from "../Body/component";
import Cart from "../ProductDetail/component";
import { Login } from "../Login/login";
import { Signup } from "../Signup/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/component";
import Footer from "../Footer/component";
import TotalProducts from "../WholeItem/component";

function Home() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />}></Route>
        <Route path="/productDetails/:productId" element={<Cart />} />
        <Route path="/cart" element={<TotalProducts />} />
        <Route path="/" element={<Body />} />
        <Route>404 Not Found!</Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default Home;

// provide routing fun. to the home page
