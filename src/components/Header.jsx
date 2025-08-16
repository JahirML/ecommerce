import { useState } from "react";
import styles from "./Header.module.css";
import Menu from "./Menu";
import Cart from "./Cart";

function Header({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function toggleCart(e) {
    // console.log()
    e.preventDefault();
    console.log(e, e.target);
    setIsOpenCart(!isOpenCart);
  }

  return (
    <>
      <header className={`${styles.header} `}>
        <div className={`${styles.div} ${isOpen ? styles.overlay : ""}`}>
          {/* <div className={`${styles.div}`}> */}
          <button
            className={styles.burger}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            ☰
          </button>
          <h1 className={styles.title}>Sneakers</h1>

          <Menu open={isOpen} toggleMenu={toggleMenu} overlay={isOpen} />
        </div>
        <div className={styles.images}>
          <button onClick={toggleCart} className={styles.cartButton}>
            {cart.quantity > 0 && (
              <span className={styles.cartQuantity}>{cart.quantity}</span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          <img
            src="/images/image-avatar.png"
            className={styles.avatar}
            alt=""
          />
        </div>
        {isOpenCart && (
          // <div className={styles.cartOverlay} onClick={toggleCart}></div>
          <Cart cart={cart} setCart={setCart} setIsOpenCart={setIsOpenCart} />
        )}
      </header>
    </>
  );
}

export default Header;
