import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Basket/Basket";
import ProductPage from "./components/ProductPage/ProductPage";
import { CartProvider } from "./components/CardContext/CardContext";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ROUTES } from "./utils/routes";

function App() {
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(0);
  return (
    <CartProvider>
      <Router>
        <div className="w-full max-w-[1200px] mx-auto">
          <Navbar count={count} setPage={setPage} page={page} />
          <Routes>
            <Route
              path={ROUTES.HOME}
              element={
                <Home
                  setCount={setCount}
                  count={count}
                  category={category}
                  setCategory={setCategory}
                />
              }
            />
            <Route
              path={ROUTES.PRODUCT}
              element={
                <ProductPage
                  setPage={setPage}
                  count={count}
                  setCount={setCount}
                  page={page}
                />
              }
            />
            <Route path={ROUTES.CART} element={<Cart setCount={setCount} />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
