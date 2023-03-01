import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import NewMovie from './Components/NewMovie';
import MoviesList from "./Components/MoviesList";


function App() {
  return (
    <div className="App">

      <header>

      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/movies" element={<MoviesList />} />
          <Route path="/movies/new" element={<NewMovie />} />
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
