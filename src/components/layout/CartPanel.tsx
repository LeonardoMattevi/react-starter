import { useNavigate } from "react-router-dom";

export function CartPanel() {
  const navigate = useNavigate();
  function goToCart(): void {
    navigate("cart");
  }

  return (
    <div className="fixed bg-slate-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between items-center border-b border-slate-600 pb-2">
          <div>Produc name</div>
          <div className="flex gap-3">
            <div>(2 x € 10))</div>
            <div>€ 300</div>
          </div>
        </li>
      </ul>
      <div className="flex justify-end my-3">Total: € 20</div>
      <div className="flex justify-center">
        <button className="btn primary" onClick={() => goToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  );
}
