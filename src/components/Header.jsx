import { useState } from "react";
import styles from "./Header.module.css";
import Menu from "./Menu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.div} ${isOpen ? styles.overlay : ""}`}>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <img src="/images/image-avatar.png" className={styles.avatar} alt="" />
      </div>
    </header>
  );
}

export default Header;
