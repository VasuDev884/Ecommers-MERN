import "./App.css";
import { useEffect, lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductPage from "./components/display/Display";
import BertoozPage from "./components/collection/Collection";
import Cart from "./components/cart/Cart";
import ProductDetails from "./components/details/Details";
import ShoppingPayment from "./components/payment/Payment";
import { Route, Routes , useLocation} from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <Header />

      <Routes>
        <Route path="/" element={<BertoozPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/details"element={<ProductDetails />} />
        <Route path="/shoppingCart" element={<Cart />} />
        <Route path="/payment" element={<ShoppingPayment />} />
      </Routes>

      <Footer />
    </Suspense>
  );
}

export default App;
