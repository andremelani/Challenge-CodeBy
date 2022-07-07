import { CartItemType } from "../../../pages";

import styles from "./styles.module.scss";

type Props = {
  item: CartItemType;
  addToCart: (clicked: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div className={styles.wrapper}>
    <div className={styles.imageArea}>
      <img src={item.imageUrl} alt={item.name} />
    </div>
    <div className={styles.information}>
      <span>{item.name}</span>
      <div className={styles.prices}>
        <span className={styles.initialPrice}>R${item.price}</span>
        <span className={styles.sellingPrice}>R${(item.amount * item.sellingPrice).toFixed(2)}</span>
      </div>
    </div>
    <div className={styles.buttons}>
      <button onClick={() => removeFromCart(item.id)}>-</button>
      <span>{item.amount}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  </div>
);

export default CartItem;
