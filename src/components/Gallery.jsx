import { useState } from "react";
import styles from "./Gallery.module.css";
import Modal from "./Modal";

function Gallery() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function toggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <div className={styles.gallery}>
        <picture onClick={toggleModal} className={styles.container__main}>
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
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
    </>
  );
}

export default Gallery;
