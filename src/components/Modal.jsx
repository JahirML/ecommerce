import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

function Modal({ setIsOpenModal }) {
  const ref = useRef();

  function clickOutside(e) {
    if (e.target === ref.current) {
      setIsOpenModal(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      // console.log(e);
      if (e.key === "Escape") {
        setIsOpenModal(false);
      }
    });
  }, [setIsOpenModal]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={styles.overlay} ref={ref} onClick={clickOutside}>
      <div className={styles.gallery}>
        <picture className={styles.container__main}>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpenModal(false)}
          >
            x
          </button>
          <button className={`${styles.btn__previous} ${styles.goToPage}`}>
            <img src="/images/icon-previous.svg" alt="" />
          </button>
          <img
            src="\images\image-product-1.jpg"
            className={styles.img__main}
            alt=""
          />
          <button className={`${styles.btn__next} ${styles.goToPage}`}>
            <img src="/images/icon-next.svg" alt="" />
          </button>
        </picture>

        <div className={styles.container}>
          <picture
            className={`${styles.container__thumbnail} ${styles.selected}`}
          >
            <img
              src="\images\image-product-1-thumbnail.jpg"
              className={styles.img__thumbnail}
              alt=""
            />
          </picture>
          <picture className={styles.container__thumbnail}>
            <img
              src="\images\image-product-2-thumbnail.jpg"
              className={styles.img__thumbnail}
              alt=""
            />
          </picture>
          <picture className={styles.container__thumbnail}>
            <img
              src="\images\image-product-3-thumbnail.jpg"
              className={styles.img__thumbnail}
              alt=""
            />
          </picture>
          <picture className={styles.container__thumbnail}>
            <img
              src="\images\image-product-4-thumbnail.jpg"
              className={styles.img__thumbnail}
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Modal;
