import toast from "react-hot-toast";
import styles from "./Cart.module.css";
function Cart({ cart, setCart, setIsOpenCart }) {
  function handleCheckout() {
    toast.success("Compra completada con éxito");

    setCart({
      src: "./images/image-product-1-thumbnail.jpg",
      quantity: 0,
      price: 125,
      title: "Fall limited edition sneakers",
      totalPrice: 0,
    });
    setIsOpenCart(false);
  }

  const { price, quantity, src, title, totalPrice } = cart;
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartTitle}>Cart</h2>
      <div className={styles.cartContent}>
        {quantity === 0 ? (
          <p className={styles.emptyCart}>Your cart is empty.</p>
        ) : (
          <div className={styles.cartItem}>
            <img className={styles.cartImage} src={src} alt={title} />
            <div className={styles.cartDetails}>
              <h3 className={styles.cartSubtitle}>{title}</h3>
              <div className={styles.cartContainerPrices}>
                <p className={styles.cartPrice}>
                  ${price.toFixed(2)} x {quantity}
                </p>

                <p className={styles.cartTotalPrice}>
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <svg
              className={styles.deleteIcon}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>

            <button onClick={handleCheckout} className={styles.checkoutButton}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
