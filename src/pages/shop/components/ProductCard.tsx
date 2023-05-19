import { Product } from "../../../models/product";

interface ProductCardProps {
  product: Partial<Product>;
  onAddToCart: (product: Partial<Product>) => void;
}

export function ProductCard(props: ProductCardProps) {
  const { product, onAddToCart } = props;
  return (
    <div className="bg-white text-black rounded-xl shadow-2xl overflow-hidden">
      {product.img && (
        <img
          src={product.img}
          alt={product.name}
          className="h-64 w-full object-cover"
        />
      )}
      <div className="flex justify-between items-center p-3 text-xl font-bold">
        <div>{product.name}</div>
        <div>{product.cost}</div>
      </div>
      <div className="p-3">{product.description}</div>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-sky-600 text-white hover:bg-slate-800 transition w-full p-3 text-center"
      >
        ADD TO CART
      </button>
    </div>
  );
}
