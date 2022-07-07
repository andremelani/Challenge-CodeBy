import Button from "@material-ui/core/Button";

import { CartItemType } from "../../../pages";

import styles from "./styles.module.scss";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div className={styles.wrapper}>
      <img src={item.imageUrl} alt={item.name} />
      <div>
        <span className={styles.titulo}>{item.name}</span>
        <span className={styles.price}>R${item.price} to</span>
        <strong>R${item.sellingPrice}</strong>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </div>
  );
};

export default Item;
