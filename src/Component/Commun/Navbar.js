import React from "react";
import logo from "../../Assets/whiteLogo.png";
import cart from "../../Assets/cart.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const counter = useSelector((state) => state.product);
  return (
    <div className="nav-bg p-2 d-flex justify-content-between">
      <div className="d-flex">
        <img src={logo} alt="logo" className="" width={100} height={40} />
        <small className="mt-2 mx-1 text-white">.in</small>
      </div>
      <button
        onClick={() => {
          navigate("/add-data");
        }}
      >
        Add Product
      </button>
      <div
        onClick={() => {
          navigate("/cart");
        }}
        className="bg-white d-flex"
      >
        <img src={cart} alt="cart" width={40} height={40} />
        <p>{counter.length}</p>
        {/* <p className='mt-3'>Cart</p> */}
      </div>
    </div>
  );
}
