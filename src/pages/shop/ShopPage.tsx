import { dbCtx } from "../../models/pocketbaseCtx";
import { Product } from "../../models/product";
import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { ErrorMessage } from "@/components/";
import { LoadingSpinner } from "../../components/layout/LoadingSpinner";

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    setLoading(true);
    dbCtx
      .collection("products")
      .getList<Product>()
      .then((res) => {
        setProducts(res.items);
      })
      .catch((err) => {
        setError(err.message ?? "Server Error");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function addToCart(product: Partial<Product>) {
    console.log(product);
  }

  return (
    <div>
      <h1 className="title">SHOP</h1>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage msg={error} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((o) => {
          return <ProductCard key={o.id} product={o} onAddToCart={addToCart} />;
        })}
      </div>

      <button className="btn" onClick={loadData}>
        load data
      </button>
    </div>
  );
}
