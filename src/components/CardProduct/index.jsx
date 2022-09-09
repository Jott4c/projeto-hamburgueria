import { Li } from "./styles";

export default function CardProduct({ product, handleAddCart }) {
  return (
    <Li>
      <div>
        <img src={product.img} alt={product.name} />
      </div>

      <h2>{product.name}</h2>
      <span>{product.category}</span>
      <p>
        {product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button onClick={() => handleAddCart(product, true)}>Adicionar</button>
    </Li>
  );
}
