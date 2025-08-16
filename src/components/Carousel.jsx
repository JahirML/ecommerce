// import { useState } from "react";
// import styles from "./Carousel.module.css";

// function Carousel({ images, thumbnails, startIndex = 0, onChange }) {
//   const [currentIndex, setCurrentIndex] = useState(startIndex);

//   function goNext() {
//     setCurrentIndex((prev) => {
//       const newIndex = (prev + 1) % images.length;
//       if (onChange) onChange(newIndex);
//       return newIndex;
//     });
//   }

//   function goPrevious() {
//     setCurrentIndex((prev) => {
//       const newIndex = prev === 0 ? images.length - 1 : prev - 1;
//       if (onChange) onChange(newIndex);
//       return newIndex;
//     });
//   }

//   function selectImage(index) {
//     setCurrentIndex(index);
//     if (onChange) onChange(index);
//   }

//   return (
//     <div className={styles.gallery}>
//       <picture className={styles.container__main}>
//         <button
//           className={`${styles.btn__previous} ${styles.goToPage}`}
//           onClick={(e) => {
//             e.stopPropagation();
//             goPrevious();
//           }}
//         >
//           <img src="/images/icon-previous.svg" alt="previous" />
//         </button>

//         <img
//           src={images[currentIndex]}
//           className={styles.img__main}
//           alt={`Product ${currentIndex + 1}`}
//         />

//         <button
//           className={`${styles.btn__next} ${styles.goToPage}`}
//           onClick={(e) => {
//             e.stopPropagation();
//             goNext();
//           }}
//         >
//           <img src="/images/icon-next.svg" alt="next" />
//         </button>
//       </picture>

//       <div className={styles.container}>
//         {thumbnails.map((thumb, index) => (
//           <picture
//             key={index}
//             className={`${styles.container__thumbnail} ${
//               currentIndex === index ? styles.selected : ""
//             }`}
//             onClick={(e) => {
//               e.stopPropagation();
//               selectImage(index);
//             }}
//           >
//             <img
//               src={thumb}
//               className={styles.img__thumbnail}
//               alt={`Thumbnail ${index + 1}`}
//             />
//           </picture>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;
