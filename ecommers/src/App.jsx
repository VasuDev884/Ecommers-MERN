import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "./components/Loader";

const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));

const ProductPage = lazy(() => import("./components/display/Display"));
const BertoozPage = lazy(() => import("./components/collection/Collection"));
const Cart = lazy(() => import("./components/cart/Cart"));
const ProductDetails = lazy(() => import("./components/details/Details"));
const ShoppingPayment = lazy(() => import("./components/payment/Payment"));
const SignupForm = lazy(() => import("./components/auth/SignUp"));
const Login = lazy(() => import("./components/auth/Login"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));

import { checkUser } from "./redux/authSlice";

const style = { padding: "100px" };

const AdminDashboard = () => <div style={style}>Admin Dashboard</div>;

const WorkerDashboard = () => <div style={style}>Worker Dashboard</div>;

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { isChecking } = useSelector((state) => state.auth);

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  if (isChecking) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Header />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<BertoozPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/shoppingCart" element={<Cart />} />
        <Route path="/payment" element={<ShoppingPayment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />

        {/* Admin protected routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          {/* Add more admin routes here */}
          <Route
            path="/admin/products"
            element={<div style={style}>Manage Products</div>}
          />
          <Route
            path="/admin/users"
            element={<div style={style}>Manage Users</div>}
          />
        </Route>

        {/* Worker protected routes */}
        <Route element={<ProtectedRoute allowedRoles={["worker"]} />}>
          <Route path="/worker" element={<WorkerDashboard />} />
          {/* Add more worker routes here */}
          <Route
            path="/worker/orders"
            element={<div style={style}>Process Orders</div>}
          />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<div style={style}>404</div>} />
      </Routes>

      <Footer />
    </Suspense>
  );
}

export default App;
