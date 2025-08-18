import { useState } from "react";
import styles from "./ContentGallery.module.css";
import toast from "react-hot-toast";

function ContentGallery({ setCart }) {
  const [quantity, setQuantity] = useState(0);

  function increaseQuantity() {
    setQuantity((q) => q + 1);
  }
  function decreaseQuantity() {
    if (quantity <= 0) {
      toast.error("La cantidad no puede ser menor a 0");
      return;
    }
    setQuantity((q) => q - 1);
  }

  const handleAddToCart = () => {
    if (quantity <= 0) {
      toast.error("Porfavor agrega por lo menos un producto");
      return;
    }
    setCart((prevCart) => {
      const newQuantity = prevCart.quantity + quantity;
      return {
        ...prevCart,
        quantity: newQuantity,
        totalPrice: newQuantity * prevCart.price,
      };
    });
    setQuantity(0);
    toast.success("Producto agregado al carrito");
  };
  return (
    <div className={styles.content}>
      <p className={styles.subtitle}>Sneaker company</p>
      <h1 className={styles.title}>Fall Limited Edition Sneakers</h1>
      <p className={styles.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className={styles.priceContainer}>
        <p className={styles.price}>
          $125.00 <span className={styles.discount}>50%</span>
        </p>
        <p className={styles.oldPrice}>$250.00</p>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.quantityContainer}>
          <button className={styles.buttonQuantity} onClick={decreaseQuantity}>
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button className={styles.buttonQuantity} onClick={increaseQuantity}>
            +
          </button>
        </div>

        <button className={styles.buttonCart} onClick={handleAddToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}

export default ContentGallery;
