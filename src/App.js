import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import NewMovie from './Components/NewMovie';
import MoviesList from "./Components/MoviesList";
import Moviesdetails from "./Components/Moviesdetails";
import UppdateMovie from "./Components/UpdateMovie";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
<Header />

      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/movies" element={<MoviesList />} />
          <Route path="/api/movies/:id" element={<Moviesdetails />} />
          <Route path="/movies/new" element={<NewMovie />} />
          <Route path="/update/movies/:id" element={<UppdateMovie />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
