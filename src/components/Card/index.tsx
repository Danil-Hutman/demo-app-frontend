import React from "react";
import styles from "./index.module.css";
import Name from "../Name";
import Price from "../Price";
import Button from "../Button";
import cactusImg from "../../assets/cactuses.png";
import Modal from "../Modal";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <article className={styles.card} onClick={() => setIsOpen(true)}>
        <div className={styles.info}>
          <Name name={product.name} />
          <Price price={product.price} />
        </div>
        <img className={styles.image} src={cactusImg} alt={product.name} />
        <Button label="Buy now" />
      </article>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.modalHeader}>
          <Name name={product.name} />
        </div>
        <div className={styles.modalInfo}>
          <img
            src={cactusImg}
            alt={product.name}
            className={styles.modalImage}
          />
          <div className={styles.modalText}>
            <h3 className={styles.price}>
              Price: <Price price={product.price} />
            </h3>

            <p>{product.description || "No description available."}</p>
          </div>
        </div>
        <div className={styles.modalActions}>
          <button className={styles.cencel} onClick={() => setIsOpen(false)}>
            Back to the list
          </button>
          <Button label="Buy now" />
        </div>
      </Modal>
    </>
  );
};

export default Card;
