import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Videos from "./Components/Videos";
import CmsVideos from "./Components/CmsVideos";
import MoviesList from "./Components/MoviesList";
import Moviesdetails from "./Components/Moviesdetails";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/movies" element={<MoviesList />} />
          <Route path="/api/movies/:id" element={<Moviesdetails />} />
        </Routes>
      </main>

      <Videos />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
