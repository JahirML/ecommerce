import styles from "./Menu.module.css";
import Modal from "./Modal";
function Menu({ open, toggleMenu }) {
  return (
    <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
      <button className={styles.close} onClick={toggleMenu}>
        x
      </button>

      <ul className={styles.ul}>
        <a href="">
          <li>Collections</li>
        </a>
        <a href="">
          <li>Men</li>
        </a>
        <a href="">
          <li>Women</li>
        </a>
        <a href="">
          <li>About</li>
        </a>
        <a href="">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
}

export default Menu;
