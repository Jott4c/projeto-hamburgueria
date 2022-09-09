import CardProduct from "../CardProduct";
import { Ul } from "./styles";

export default function ProductsList({ products, handleAddCart, inputValue }) {
  return (
    <Ul>
      {products.map((product) => (
        <CardProduct
          key={product.id}
          product={product}
          handleAddCart={handleAddCart}
        />
      ))}
    </Ul>
  );
}
