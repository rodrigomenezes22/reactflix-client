import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MoviesList from "./Components/MoviesList";
import Moviesdetails from "./Components/Moviesdetails";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/movies" element={<MoviesList />} />
          <Route path="/api/movies/:id" element={<Moviesdetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
