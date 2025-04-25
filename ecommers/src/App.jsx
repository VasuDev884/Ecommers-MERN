import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductPage from "./components/display/Display";
import ProductDetails from "./components/details/Details";
import { Route, Routes } from "react-router-dom";

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

      </Routes>

      <Footer />
    </Suspense>
  );
}

export default App;
