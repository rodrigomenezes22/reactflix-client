import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Footer from './Components/Footer'
import Videos from './Components/Videos'
import CmsVideos from './Components/CmsVideos';
import Home from "./Components/Home";
import MoviesList from "./Components/MoviesList";


function App() {
  return (
    <div className="App">

      <header>

      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/adm-videos" element={ <CmsVideos />} />


      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviesList" element={<MoviesList />} />
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
