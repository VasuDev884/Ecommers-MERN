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
import SignupForm from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch } from "react-redux";
import { checkUser } from "./redux/authSlice";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Header />

      <Routes>
        <Route path="/" element={<BertoozPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/details" element={<ProductDetails />} />

        <Route path="*" element={<div style={{ padding: "100px" }}>404</div>} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <div style={{ padding: "100px" }}>Admin</div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/worker"
          element={
            <ProtectedRoute allowedRoles={["worker"]}>
              <div style={{ padding: "100px" }}>Worker</div>
            </ProtectedRoute>
          }
        />

        <Route path="/shoppingCart" element={<Cart />} />
        <Route path="/payment" element={<ShoppingPayment />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>

      <Footer />
    </Suspense>
  );
}

export default App;
