import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addItem } from "../../redux/slice";

export default function ProductDetails() {
  const [reviewPoint, setReview] = useState(3);
  const state = useLocation();
  const productData = state?.state?.data;
  const review = [{}, {}, {}, {}, {}];
  const counter = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const addtoCart = (val) => {
    const find = counter.filter((state) => state?._id === val?._id);
    const withoutfind = counter.filter((state) => state?._id !== val?._id);

    if (find?.length > 0) {
      dispatch(
        addItem([...withoutfind, { ...find[0], count: find[0].count + 1 }])
      );
    } else {
      dispatch(addItem([...withoutfind, { ...val, count: 1 }]));
    }
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <img
          height="75%"
          width="75%"
          src={productData.image}
          className="img-fluid mt-5 m-auto d-block"
        />
      </div>
      <div className="col-sm-6">
        <p className="product-title w-75 mt-5">{productData.name}</p>
        <p>Brand: {productData.Brand}</p>
        <div className="d-flex">
          <h2 className="descount">-{productData.descount}%</h2>
          <h2>₹{productData.sellingPrice}</h2>
        </div>
        <p>
          M.R.P.: <del>₹{productData.MRP}</del>
        </p>
        <div className="d-flex">
          <span className="title">Brand</span>
          <span>{productData.Brand}</span>
        </div>
        {/* <div className='d-flex'>
          <span className='title'>Size</span>
          <span>6 x 9 Feet</span>
        </div> */}
        <div className="d-flex">
          <span className="title">Material</span>
          <span>{productData.matrial}</span>
        </div>
        <div className="mt-5">
          <p className="about">About this item</p>
          <ul className="w-75">
            <li className="mt-2">{productData.description}</li>
          </ul>
        </div>
        <div className="mb-3 mt-3">
          <button
            className="add_cart_button"
            onClick={() => {
              addtoCart(productData);
            }}
          >
            Add to Cart
          </button>
          <button className="add_now">Buy Now</button>
        </div>
        <div className="review-main">
          <h5>Top review from India</h5>
          <div className="py-2">
            <div className="d-flex">
              <img
                src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                className="profile-img"
              />
              <p className="name mt-2 mx-2">Faima</p>
            </div>
            {review.map((val, i) => {
              return i + 1 > reviewPoint ? (
                <img
                  src="https://static.thenounproject.com/png/620341-200.png"
                  width={20}
                  height={20}
                />
              ) : (
                <img
                  key={i}
                  src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png"
                  width={20}
                  height={20}
                />
              );
            })}
            <p className="review">
              The carpet is exactly same as in the description, look good,smooth
              and easy to clean. The product was also delivered on time and well
              packaged. Its really value for money
            </p>
          </div>
          <div className="py-2">
            <div className="d-flex">
              <img
                src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                className="profile-img"
              />
              <p className="name mt-2 mx-2">Faima</p>
            </div>
            {review.map((val, i) => {
              return i + 1 > reviewPoint ? (
                <img
                  src="https://static.thenounproject.com/png/620341-200.png"
                  width={20}
                  height={20}
                />
              ) : (
                <img
                  key={i}
                  src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png"
                  width={20}
                  height={20}
                />
              );
            })}
            <p className="review">
              The carpet is exactly same as in the description, look good,smooth
              and easy to clean. The product was also delivered on time and well
              packaged. Its really value for money
            </p>
          </div>
          <div className="py-2">
            <div className="d-flex">
              <img
                src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                className="profile-img"
              />
              <p className="name mt-2 mx-2">Faima</p>
            </div>
            {review.map((val, i) => {
              return i + 1 > reviewPoint ? (
                <img
                  src="https://static.thenounproject.com/png/620341-200.png"
                  width={20}
                  height={20}
                />
              ) : (
                <img
                  key={i}
                  src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png"
                  width={20}
                  height={20}
                />
              );
            })}
            <p className="review">
              The carpet is exactly same as in the description, look good,smooth
              and easy to clean. The product was also delivered on time and well
              packaged. Its really value for money
            </p>
          </div>
          <div className="py-2">
            <div className="d-flex">
              <img
                src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                className="profile-img"
              />
              <p className="name mt-2 mx-2">Faima</p>
            </div>
            {review.map((val, i) => {
              return i + 1 > reviewPoint ? (
                <img
                  src="https://static.thenounproject.com/png/620341-200.png"
                  width={20}
                  height={20}
                />
              ) : (
                <img
                  key={i}
                  src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png"
                  width={20}
                  height={20}
                />
              );
            })}
            <p className="review">
              The carpet is exactly same as in the description, look good,smooth
              and easy to clean. The product was also delivered on time and well
              packaged. Its really value for money
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
