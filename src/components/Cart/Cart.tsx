import { useState } from "react";
import styles from "./styles.module.scss";

import CartItem from "../CartItem/CartItem";

import { CartItemType } from "../../../pages";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce(
      (ack: number, item) => ack + item.amount * item.sellingPrice,
      0
    );

  return (
    <div className={styles.aside}>
      <div className={styles.title}>
        <h2>Meu Carrinho</h2>
      </div>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className={styles.totalArea}>
            <div className={styles.total}>
              <h2>Total</h2>
              <h2>R${calculateTotal(cartItems).toFixed(2)}</h2>
            </div>
            {calculateTotal(cartItems) > 10 ? (
                <div className={styles.free}>
                    <p>Parabéns, sua compra tem frete grátis !</p>
                </div>
            ) : null}


          </div>

          <div className={styles.buy}>
            <button>Finalizar compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
