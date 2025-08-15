import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <picture className={styles.container__main}>
        <img
          src="\images\image-product-1.jpg"
          className={styles.img__main}
          alt=""
        />
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
  );
}

export default Gallery;
