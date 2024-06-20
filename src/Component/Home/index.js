import React, { useEffect, useState } from "react";
import Product from "../Product";

const product = [
  {
    _id: 1,
    name: "SARAL HOME EASY LIVING Microfiber Striped Anti Skid Set of 2 Bathmats (Black, 35X50 Cm), Large Rectangle",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    matrial: "ffff",
    Brand: "dffff",
    color: "gggg",
    description: "fffff",
    MRP: 1000,
    sellingPrice: 1,
    descount: 20,
    platForm: "Amezon",
  },
  {
    _id: 2,
    name: "SARAL HOME EASY LIVING Microfiber Striped Anti Skid Set of 2 Bathmats (Black, 35X50 Cm), Large Rectangle",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    matrial: "ffff",
    Brand: "dffff",
    color: "gggg",
    description: "fffff",
    MRP: 1000,
    sellingPrice: 1,
    descount: 20,
    platForm: "Amezon",
  },
];
export default function Home() {
  //   const [product, setProduct] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:9000/product/get")
  //       .then((res) => res.json())
  //       .then((responce) => {
  //         setProduct(responce.data);
  //       });
  //   }, []);
  return (
    <div className="">
      <div className="row">
        {product.map((val, i) => {
          console.log("vsss", val);
          return (
            <div className="col-sm-3">
              {/* {val.platform === "Amazon" || val.platform === "All" ? ( */}
              <Product key={i} val={val} />
              {/* ) : null} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
