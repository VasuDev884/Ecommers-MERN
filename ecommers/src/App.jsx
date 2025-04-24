import "./App.css";
import BertoozPage from "./components/collection/Collection";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductPage from "./components/display/Display";
import ProductDetails from "./components/details/Details";
import ShoppingCart from './components/cart/Cart';
import ShoppingPayment from './components/payment/Payment';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BertoozPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/details"element={<ProductDetails />} />
        <Route path="/shoppingCart"element={<ShoppingCart />} />
        <Route path="/shoppingPayment"element={<ShoppingPayment />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
