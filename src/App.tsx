import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  CMSOrdersPage,
  CMSPage,
  CMSProductsPage,
  CartPage,
  CheckoutPage,
  LoginPage,
  ShopPage,
} from "./pages";
import { ThanksPage } from "./pages/checkout/ThanksPage";
import { NavBar } from "@/components/index";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <NavBar />
        <hr />
        <Routes>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="thankyou" element={<ThanksPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cms" element={<CMSPage />}>
            <Route path="products" element={<CMSProductsPage />} />
            <Route path="orders" element={<CMSOrdersPage />} />
            <Route index element={<Navigate to="products" />} />
          </Route>

          <Route path="*" element={<ShopPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
