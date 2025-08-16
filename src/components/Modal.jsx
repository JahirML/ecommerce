import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";
function Modal({ setIsOpenModal, startIndex = 0 }) {
  const ref = useRef();
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  const thumbnails = [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];

  function clickOutside(e) {
    if (e.target === ref.current) {
      setIsOpenModal(false);
    }
  }

  function goNext() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function goPrevious() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setIsOpenModal(false);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
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
        {/* Botón cerrar */}
        <picture className={styles.container__main}>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpenModal(false)}
          >
            x
          </button>

          <button
            className={`${styles.btn__previous} ${styles.goToPage}`}
            onClick={(e) => {
              e.stopPropagation();
              goPrevious();
            }}
          >
            <img src="/images/icon-previous.svg" alt="previous" />
          </button>

          {/* Imagen principal */}
          <img
            src={images[currentIndex]}
            className={styles.img__main}
            alt={`Product ${currentIndex + 1}`}
          />

          {/* Botón siguiente */}
          <button
            className={`${styles.btn__next} ${styles.goToPage}`}
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <img src="/images/icon-next.svg" alt="next" />
          </button>
        </picture>

        {/* Thumbnails */}
        <div className={styles.container}>
          {thumbnails.map((thumb, index) => (
            <picture
              key={index}
              className={`${styles.container__thumbnail} ${
                currentIndex === index ? styles.selected : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
            >
              <img
                src={thumb}
                className={styles.img__thumbnail}
                alt={`Thumbnail ${index + 1}`}
              />
            </picture>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
