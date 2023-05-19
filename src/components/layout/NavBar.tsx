import { NavLink } from "react-router-dom";
import logo from "../../assets/home.png";
import { CartPanel } from "./CartPanel";

const isActive = (obj: { isActive: boolean }) => {
  return obj.isActive ? "font-bold" : "";
};

export function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
      <div className="bg-slate-900 flex justify-between items-center h-20 text-white p-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="my logo" className="w-16" />
          <NavLink to="shop" className={isActive}>
            Shop
          </NavLink>
        </div>

        {/* Cart button badge */}
        <div>
          <button className="btn accent lg">Cart: 0</button>
          <CartPanel />
        </div>

        {/*Cart Panel*/}
        {<CartPanel />}

        {/*actions button*/}
        <div className="fixed bottom-2 right-2 p-5">
          <NavLink to="/cms/products" className="btn accent lg">
            Products
          </NavLink>
          <NavLink to="/cms/orders" className="btn accent lg">
            Orders
          </NavLink>
          <NavLink to="login" className="btn accent lg">
            Login
          </NavLink>
          <button className="btn primary lg">logout</button>
        </div>
      </div>
    </div>
  );
}
