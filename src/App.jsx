import { useState } from "react";
import "./App.css";
import ContentGallery from "./components/ContentGallery";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Carousel from "./components/Carousel";

function App() {
  const [cart, setCart] = useState({
    src: "./images/image-product-1-thumbnail.jpg",
    quantity: 0,
    price: 125,
    title: "Fall limited edition sneakers",
    totalPrice: 0,
  });
  return (
    <>
      <div className="app">
        <Header cart={cart} setCart={setCart} />
        <main className="main">
          <Gallery />
          <ContentGallery cart={cart} setCart={setCart} />
        </main>
        {/* <Carousel /> */}
      </div>
      <Toaster
        gutter={10}
        toastOptions={{
          duration: 2000,
          style: {
            // width: "300px",
            height: "70px",
            background: "#1d2026",
            color: "#fff",
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;
