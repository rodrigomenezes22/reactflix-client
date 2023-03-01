import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MoviesList from "./Components/MoviesList";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/movies" element={<MoviesList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
