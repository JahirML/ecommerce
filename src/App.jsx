import "./App.css";
import ContentGallery from "./components/ContentGallery";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Gallery />
        <ContentGallery />
      </main>
    </div>
  );
}

export default App;
