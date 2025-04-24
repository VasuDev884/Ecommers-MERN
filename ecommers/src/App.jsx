import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

const BertoozPage = lazy(() => import("./components/collection/Collection"));
const ProductPage = lazy(() => import("./components/display/Display"));
const ProductDetails = lazy(() => import("./components/details/Details"));

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
        <Route path="/details" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Suspense>
  );
}

export default App;
