import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/slice";
import { useNavigate } from "react-router-dom";

export default function () {
  const counter = useSelector((state) => state.product);
  const navigate = useNavigate();
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();

  const addtoCart = (val) => {
    const find = counter.filter((value) => value._id === val._id);
    const withoutfind = counter.filter((value) => value._id !== val._id);

    if (find.length > 0) {
      dispatch(
        addItem([...withoutfind, { ...find[0], count: find[0].count + 1 }])
      );
    } else {
      dispatch(addItem([...withoutfind, { ...val, count: 1 }]));
    }
  };

  const removeCart = (val) => {
    const find = counter?.filter((state) => state?._id !== val?._id);
    const removeItemData = counter?.filter((state) => state?._id === val?._id);
    if (removeItemData[0]?.count > 1) {
      dispatch(
        removeItem([
          ...find,
          { ...removeItemData[0], count: removeItemData[0].count - 1 },
        ])
      );
    } else {
      dispatch(removeItem(find));
    }
  };

  return (
    <>
      {counter.map((val, i) => {
        return (
          <div key={i} className="d-flex p-3">
            <img width={150} height={150} src={val.image} />
            <div className="mx-3 w-100">
              <p className="product-cart-title">{val.name}</p>
              <p className="product-cart-title">{val.description}</p>
              <div className="d-flex main justify-content-between">
                <div>
                  <p className="detail">
                    <b>Price -</b> {val.sellingPrice}
                  </p>
                  <p className="detail">
                    <b>Count -</b> {val.count}
                  </p>
                </div>
                <div className="count-main">
                  <button
                    onClick={() => {
                      removeCart(val);
                    }}
                    className="btn mx-3"
                  >
                    <span className="item-add">-</span>
                  </button>
                  <p className="count">{val.count}</p>
                  <button
                    onClick={() => {
                      addtoCart(val);
                    }}
                    className="btn mx-3"
                  >
                    <span className="item-add">+</span>
                  </button>
                </div>
                <div className="">
                  <h3 className="price_total">
                    {val.sellingPrice * val.count}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <h2 className="text-end mx-4">{total}</h2>
      <div className="d-flex justify-content-end">
        <button
          className="add_now-cart"
          onClick={() => {
            navigate("/address");
          }}
        >
          Buy Now
        </button>
      </div>
    </>
  );
}
