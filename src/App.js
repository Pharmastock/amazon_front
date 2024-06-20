import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Commun/Footer";
import Navbar from "./Component/Commun/Navbar";
import Home from "./Component/Home";
import Product from "./Component/Product";
import ProductDetails from "./Component/ProductDetail";

import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./Component/Cart";
import Address from "./Component/Address";
import Payment from "./Component/Payment";
import AddData from "./Component/AddData";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address" element={<Address />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/add-data" element={<AddData />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
