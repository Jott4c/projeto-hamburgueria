import {
  CardCart,
  ContainerCart,
  ContentCart,
  ContentCartVazio,
} from "./styles";

import { IoAddCircleSharp, IoRemoveCircleSharp } from "react-icons/io5";

export default function Cart({ cartProducts, setCartProducts, handleAddCart }) {
  const amount = cartProducts.reduce(
    (amount, currentValue) => amount + currentValue.price * currentValue.qtd,
    0
  );

  function handleRemove() {
    setCartProducts((oldProducts) =>
      oldProducts.map((oldProduct) => (oldProduct.qtd = 0))
    );
    setCartProducts([]);
  }

  return (
    <ContainerCart>
      <p>Carrinho de compras</p>

      {cartProducts.length < 1 ? (
        <ContentCartVazio>
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </ContentCartVazio>
      ) : (
        <>
          <ContentCart>
            {cartProducts.map((cartProduct) => (
              <CardCart key={cartProduct.id}>
                <div className="content-img">
                  <img src={cartProduct.img} alt="" />
                </div>
                <div className="content-info">
                  <p>{cartProduct.name}</p>
                  <span>{cartProduct.category}</span>
                </div>
                <div className="content-button">
                  <button
                    className="remove"
                    onClick={() => handleAddCart(cartProduct, false)}
                  >
                    <IoRemoveCircleSharp />
                  </button>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={cartProduct.qtd}
                    disabled
                  />
                  <button
                    className="add"
                    onClick={() => handleAddCart(cartProduct, true)}
                  >
                    <IoAddCircleSharp />
                  </button>
                </div>
              </CardCart>
            ))}
          </ContentCart>

          <div className="footer-cart">
            <p>Total</p>
            <p>
              {amount.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button onClick={() => handleRemove()}>Finalizar Compra</button>
          </div>
        </>
      )}
    </ContainerCart>
  );
}
