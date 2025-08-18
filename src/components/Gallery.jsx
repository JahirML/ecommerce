import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import Modal from "./Modal";

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

function Gallery() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function toggleModal() {
    setIsOpenModal(!isOpenModal);
  }
  function goNext() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }
  function goPrevious() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrevious();
      }
    }
    if (currentIndex !== 0) {
      document.querySelector(".img__main ").style.objectPosition = "top";
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={styles.gallery}>
        <picture onClick={toggleModal} className={styles.container__main}>
          <button
            className={`${styles.btn__previous} ${styles.goToPage}`}
            onClick={(e) => {
              e.stopPropagation();
              goPrevious();
            }}
          >
            <img src="/images/icon-previous.svg" alt="previous" />
          </button>
          <img
            src={images[currentIndex]}
            className={`${styles.img__main} ${
              currentIndex === 0 ? styles.img__main_1 : ""
            }`}
            alt={`Product ${currentIndex + 1}`}
          />
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
      {isOpenModal && (
        <Modal
          setIsOpenModal={setIsOpenModal}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </>
  );
}

export default Gallery;
